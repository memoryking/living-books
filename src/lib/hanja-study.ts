export interface StudyRecord {
  stage: number;
  due: number;
  last: number;
  attempts: number;
  misses: number;
  needsReview: boolean;
}
export interface StudyState {
  version: 1;
  lastId: number;
  records: Record<number, StudyRecord>;
  bookmarks: number[];
  notes: Record<number, string>;
}
export const EMPTY_STUDY: StudyState = { version: 1, lastId: 1, records: {}, bookmarks: [], notes: {} };
export const INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;
// Keep due reviews ahead of new material; a finite batch always has an end.
export function planStudy(ids: number[], records: StudyState['records'], now: number) {
  const due = ids.filter(id => records[id] && records[id].due <= now)
    .sort((a, b) => records[a].due - records[b].due || a - b);
  if (due.length) return { ids: due.slice(0, 10), learning: false };
  return { ids: ids.filter(id => !records[id]).slice(0, 5), learning: true };
}
export function gradeRecord(previous: StudyRecord | undefined, remembered: boolean, now: number, practice = false): StudyRecord {
  const attempts = (previous?.attempts ?? 0) + 1;
  const misses = (previous?.misses ?? 0) + (remembered ? 0 : 1);
  if (!remembered) return { stage: 0, due: now + 10 * 60_000, last: now, attempts, misses, needsReview: true };
  if (practice && previous) return { ...previous, last: now, attempts, misses, needsReview: false };
  // An early retry can restore confidence, but cannot jump the spacing ladder.
  const eligible = !previous || now >= previous.due;
  const stage = eligible ? Math.min((previous?.stage ?? 0) + 1, INTERVAL_DAYS.length) : previous.stage;
  const due = eligible ? now + INTERVAL_DAYS[Math.max(0, stage - 1)] * 86_400_000 : previous.due;
  return { stage, due, last: now, attempts, misses, needsReview: false };
}
export function parseStudy(value: unknown, total = 453): StudyState | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const v = value as Record<string, unknown>;
  if (v.version !== 1 || !v.records || typeof v.records !== 'object' || Array.isArray(v.records) || !Array.isArray(v.bookmarks) || !v.notes || typeof v.notes !== 'object' || Array.isArray(v.notes)) return null;
  const validId = (id: number) => Number.isInteger(id) && id >= 1 && id <= total;
  const records: Record<number, StudyRecord> = {};
  for (const [key, entry] of Object.entries(v.records)) {
    const id = Number(key);
    if (!validId(id) || !entry || typeof entry !== 'object') return null;
    const r = entry as StudyRecord;
    if (![r.stage, r.due, r.last, r.attempts, r.misses].every(n => Number.isFinite(n) && n >= 0) || !Number.isInteger(r.stage) || r.stage > 5 || typeof r.needsReview !== 'boolean' || !Number.isInteger(r.attempts) || !Number.isInteger(r.misses) || r.misses > r.attempts || r.due > 8.64e15 || r.last > 8.64e15) return null;
    records[id] = { stage: r.stage, due: r.due, last: r.last, attempts: r.attempts, misses: r.misses, needsReview: r.needsReview };
  }
  if (!v.bookmarks.every(id => typeof id === 'number' && validId(id))) return null;
  const notes: Record<number, string> = {};
  for (const [key, note] of Object.entries(v.notes)) {
    if (!validId(Number(key)) || typeof note !== 'string' || note.length > 2000) return null;
    notes[Number(key)] = note;
  }
  return { version: 1, lastId: typeof v.lastId === 'number' && validId(v.lastId) ? v.lastId : 1, records, bookmarks: [...new Set(v.bookmarks)] as number[], notes };
}
export function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
