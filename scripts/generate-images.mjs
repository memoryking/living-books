/**
 * 전자책 이미지 생성 + R2 업로드 스크립트
 *
 * 사용법:
 *   node scripts/generate-images.mjs otc-medicine-guide
 *   node scripts/generate-images.mjs otc-medicine-guide --dry-run  (프롬프트만 확인)
 */

import OpenAI from "openai";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

// ── 설정 (.env.local에서 로드) ──
import { config } from "dotenv";
config({ path: ".env.local" });

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET = process.env.R2_BUCKET || "livingbooks-media";
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || "https://pub-d0d60c2fafe34c62a9d8993114fe64ca.r2.dev";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// ── 이미지 프롬프트 정의 ──
const IMAGE_PROMPTS = {
  "otc-medicine-guide": [
    {
      id: "ch1-pain-fever",
      prompt: "Clean flat illustration of common Korean pain relief medicines: a box of Tylenol (acetaminophen), Brufen (ibuprofen), and children's fever syrup, arranged neatly on a white surface with a thermometer. Soft pastel colors, medical illustration style, no text, no brand logos, warm and approachable feel. 750x500px aspect ratio.",
      chapter: "01",
    },
    {
      id: "ch2-cold-medicine",
      prompt: "Flat illustration showing various cold medicine packages arranged in a grid: pills, capsules, syrup bottle, and nasal spray. A tissue box and a warm cup of tea nearby. Soft blue and green color palette, clean medical illustration style, no text, no real brand logos. 750x500px.",
      chapter: "02",
    },
    {
      id: "ch3-stomach",
      prompt: "Friendly flat illustration of digestive medicines: antacid liquid bottle, digestive enzyme tablets, and a stomach silhouette showing comfort. Soft mint green background, clean lines, medical illustration style. No text, no brand logos. 750x500px.",
      chapter: "03",
    },
    {
      id: "ch4-herbal",
      prompt: "Warm flat illustration of traditional Korean herbal medicines: a cup of Ssanghwatang (dark herbal drink), dried herbs (ginseng, jujube, angelica root), and traditional medicine packets. Earth tones and warm brown palette, cozy feel. No text. 750x500px.",
      chapter: "04",
    },
    {
      id: "ch5-skin-wound",
      prompt: "Clean flat illustration of wound care supplies: antibiotic ointment tube, wound healing cream, bandages of various sizes, antiseptic solution bottle, and cotton swabs, neatly arranged. Soft white and light blue background, medical style. No text. 750x500px.",
      chapter: "05",
    },
    {
      id: "ch6-allergy",
      prompt: "Flat illustration showing allergy and hay fever concept: antihistamine pill packet, nasal spray, eye drops, surrounded by floating pollen particles and flower petals. Soft purple and pink palette, clean medical style. No text. 750x500px.",
      chapter: "06",
    },
    {
      id: "ch7-gut-health",
      prompt: "Friendly flat illustration of gut health: probiotic capsules, a smiling intestine icon, fiber-rich foods (yogurt, banana, whole grain), and a glass of water. Soft green and cream palette, warm and approachable. No text. 750x500px.",
      chapter: "07",
    },
    {
      id: "ch8-eye-ear-mouth",
      prompt: "Clean flat illustration of eye, ear and mouth care products: artificial tear drops, eye drop bottle, mouthwash bottle, oral ulcer patch, arranged with icons of an eye, ear and mouth. Soft teal palette, medical style. No text. 750x500px.",
      chapter: "08",
    },
    {
      id: "ch9-supplements",
      prompt: "Bright flat illustration of vitamins and supplements: vitamin D capsule, omega-3 fish oil, multivitamin bottle, magnesium tablets, deworming pill, and a small measuring cup. Arranged on a sunny yellow background, clean and organized. No text. 750x500px.",
      chapter: "09",
    },
    {
      id: "ch10-storage",
      prompt: "Flat illustration of a well-organized home medicine cabinet: shelves with labeled sections for different medicine types, a first aid kit, a thermometer, and a locked child-safety latch. Warm, safe feeling with soft green and white colors. No text. 750x500px.",
      chapter: "10",
    },
  ],
};

// ── 메인 함수 ──
async function main() {
  const bookId = process.argv[2];
  const dryRun = process.argv.includes("--dry-run");

  if (!bookId || !IMAGE_PROMPTS[bookId]) {
    console.log("사용법: node scripts/generate-images.mjs <book-id> [--dry-run]");
    console.log("가능한 book-id:", Object.keys(IMAGE_PROMPTS).join(", "));
    process.exit(1);
  }

  const prompts = IMAGE_PROMPTS[bookId];
  console.log(`\n📚 ${bookId} — ${prompts.length}개 이미지 생성 시작\n`);

  const results = [];

  for (const item of prompts) {
    console.log(`🎨 [${item.id}] 생성 중...`);

    if (dryRun) {
      console.log(`   프롬프트: ${item.prompt.substring(0, 80)}...`);
      console.log(`   경로: ebook/${bookId}/${item.id}.png\n`);
      continue;
    }

    try {
      // 1. OpenAI 이미지 생성
      const response = await openai.images.generate({
        model: "gpt-image-1",
        prompt: item.prompt,
        n: 1,
        size: "1536x1024",
        quality: "medium",
      });

      const imageData = response.data[0];
      let imageBuffer;

      if (imageData.b64_json) {
        imageBuffer = Buffer.from(imageData.b64_json, "base64");
      } else if (imageData.url) {
        const imgRes = await fetch(imageData.url);
        imageBuffer = Buffer.from(await imgRes.arrayBuffer());
      }

      // 2. R2 업로드
      const key = `ebook/${bookId}/${item.id}.png`;
      await s3.send(new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: imageBuffer,
        ContentType: "image/png",
      }));

      const publicUrl = `${R2_PUBLIC_URL}/${key}`;
      console.log(`   ✅ 업로드 완료: ${publicUrl}\n`);

      results.push({
        id: item.id,
        chapter: item.chapter,
        url: publicUrl,
      });

      // API 속도 제한 방지
      await new Promise(r => setTimeout(r, 3000));

    } catch (err) {
      console.log(`   ❌ 실패: ${err.message}\n`);
    }
  }

  if (!dryRun && results.length > 0) {
    // 3. 마크다운에 이미지 삽입
    console.log(`\n📝 마크다운에 이미지 삽입 중...`);
    const contentDir = path.join(process.cwd(), "data", bookId, "content");

    for (const r of results) {
      const files = fs.readdirSync(contentDir).filter(f => f.startsWith(r.chapter));
      if (files.length === 0) continue;

      const filePath = path.join(contentDir, files[0]);
      let content = fs.readFileSync(filePath, "utf-8");

      // 첫 번째 ## 헤딩 뒤에 이미지 삽입
      const headingMatch = content.match(/^(# .+\n)/m);
      if (headingMatch) {
        const insertPos = content.indexOf(headingMatch[0]) + headingMatch[0].length;
        content = content.slice(0, insertPos) + `\n![${r.id}](${r.url})\n` + content.slice(insertPos);
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`   ✅ ${files[0]}에 이미지 삽입`);
      }
    }

    console.log(`\n🎉 완료! ${results.length}개 이미지 생성 + 업로드 + 삽입`);
    console.log(`\n빌드 & 배포 필요: npx next build && git add -A && git commit -m "Add images" && git push`);
  }
}

main().catch(console.error);
