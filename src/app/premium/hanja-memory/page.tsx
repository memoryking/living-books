import { hanjaDetails } from '@/lib/hanja-marketing';
export const metadata = {title:'그림으로 기억하는 한자 453 · 암기앱',description:'첫 글자 메타 학습과 FSRS 복습, 회차 이어하기와 하루 1시간 계획으로 배우는 한자 453 암기앱.'};
export default function Page(){return <main dangerouslySetInnerHTML={{__html:hanjaDetails().find(d=>d.id==='hanja-memory')!.detailHtml.replaceAll('https://living-books-beta.vercel.app','')}}/>;}
