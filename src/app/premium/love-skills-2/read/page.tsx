import GuideBook from "@/components/GuideBook";
import { LOVE_SKILLS_2, LOVE_SKILLS_2_TOP, readLoveSkills2 } from "@/lib/love-skills-2";
import styles from "./reading.module.css";

export const metadata = {
  title: "연애의 기술2 | 읽기",
  description: LOVE_SKILLS_2.subtitle,
};

export default function LoveSkills2ReadPage() {
  const sections = readLoveSkills2().map(section => ({
    id: section.id,
    title: section.title,
    body: <div className={styles.manuscript} dangerouslySetInnerHTML={{ __html: section.html }} />,
  }));
  return <GuideBook
    bookId={LOVE_SKILLS_2.id}
    title={LOVE_SKILLS_2.title}
    emoji={LOVE_SKILLS_2.emoji}
    subtitle={LOVE_SKILLS_2.subtitle}
    topItems={LOVE_SKILLS_2_TOP}
    sections={sections}
    updateLogs={[{ version: 1, date: "2026-10-02", changes: ["5부·20개 실전 수업, 작성 도구와 대화문 20개, 일주일 실행표를 담은 별도 신간"] }]}
    currentVersion={1}
  />;
}
