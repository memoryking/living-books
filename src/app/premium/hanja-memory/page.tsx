import { hanjaDetails } from '@/lib/hanja-marketing';
export const metadata = {title:'그림으로 기억하는 한자 453 · 암기앱',description:'오늘 학습과 미리 복습, 자율·메타 학습, 쓰기 비교로 기억을 확인하는 한자 암기앱.'};
export default function Page(){return <main dangerouslySetInnerHTML={{__html:hanjaDetails().find(d=>d.id==='hanja-memory')!.detailHtml.replaceAll('https://living-books-beta.vercel.app','')}}/>;}
