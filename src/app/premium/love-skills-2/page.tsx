import { loveSkills2Details } from "@/lib/love-skills-2-marketing";

export const metadata = { title: "연애의 기술2 | 살아있는 정보책", description: loveSkills2Details().metaDesc };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: loveSkills2Details().detailHtml.replaceAll("https://living-books-beta.vercel.app", "") }} />;
}
