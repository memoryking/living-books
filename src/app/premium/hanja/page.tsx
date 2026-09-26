import { hanjaDetails } from '@/lib/hanja-marketing';
export const metadata = {title:'그림으로 기억하는 한자 453 · 전자책', description:'한자 453개를 그림·암기 문장·활용 예시로 읽는 전자책. 목차·스크롤·페이지형 읽기와 헷갈림 비교 부록.'};
export default function Page() {
  return <main dangerouslySetInnerHTML={{__html:hanjaDetails().find(d=>d.id==='hanja')!.detailHtml.replaceAll('https://living-books-beta.vercel.app','')}}/>;
}
