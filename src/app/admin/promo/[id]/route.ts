import { renderPromo } from '@/lib/render-promo';
export async function GET(request:Request,{params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  const html=await renderPromo(id,new URL(request.url).searchParams.get('layout')==='a4');
  return new Response(html||'Not Found',{status:html?200:404,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
}
