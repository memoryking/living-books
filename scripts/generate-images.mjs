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
      prompt: "Photorealistic product photography of common pain relief medicines on a clean white marble surface: several white and red pill boxes, a digital thermometer showing 38.5°C, a glass of water, and a small medicine cup with liquid. Soft natural window light from the left, shallow depth of field, warm tone. No visible brand names or text. Professional commercial photography style.",
      chapter: "01",
    },
    {
      id: "ch2-cold-medicine",
      prompt: "Photorealistic still life of cold and flu medicines arranged on a wooden bedside table: various pill blister packs, a brown syrup bottle with measuring cup, nasal spray, a box of tissues, and a steaming cup of honey lemon tea. Cozy bedroom atmosphere with soft warm lighting. No visible brand names. Professional lifestyle photography.",
      chapter: "02",
    },
    {
      id: "ch3-stomach",
      prompt: "Photorealistic top-down view of digestive medicines on a clean kitchen counter: white antacid liquid bottle, blister packs of tablets, a small glass of water, and fresh mint leaves as a natural element. Bright, clean, airy feel with natural daylight. No brand names visible. Commercial product photography style.",
      chapter: "03",
    },
    {
      id: "ch4-herbal",
      prompt: "Photorealistic scene of traditional Korean herbal medicine: a ceramic cup filled with dark brown Ssanghwatang herbal drink, dried ginseng roots, red jujube dates, cinnamon sticks, and angelica root arranged on a traditional Korean wooden tray (소반). Warm, moody lighting with steam rising from the cup. Rustic Korean aesthetic. No text.",
      chapter: "04",
    },
    {
      id: "ch5-skin-wound",
      prompt: "Photorealistic flat lay of wound care supplies on a white surface: antibiotic ointment tubes, adhesive bandages of various sizes, a roll of medical gauze, antiseptic solution bottle, cotton balls, medical scissors, and tweezers. Clean, organized, clinical feel with bright even lighting. No brand names. Medical product photography.",
      chapter: "05",
    },
    {
      id: "ch6-allergy",
      prompt: "Photorealistic scene of allergy season: antihistamine pill packets and nasal spray bottle on a windowsill, with cherry blossom petals floating in through an open window. Soft spring sunlight, slightly hazy atmosphere suggesting pollen. Beautiful but conveys allergy concept. No brand names. Lifestyle photography.",
      chapter: "06",
    },
    {
      id: "ch7-gut-health",
      prompt: "Photorealistic arrangement of gut health products and foods: probiotic supplement capsules spilling from a bottle, a bowl of Greek yogurt with granola, a ripe banana, a glass of kefir, and whole grain bread. Bright kitchen setting with natural light and a white background. Fresh and healthy feel. No brand names. Food and health photography.",
      chapter: "07",
    },
    {
      id: "ch8-eye-ear-mouth",
      prompt: "Photorealistic close-up of eye and oral care products on a bathroom shelf: artificial tear eye drop bottles, a small mouthwash bottle, oral care gel tube, and cotton pads. Clean white bathroom tiles in the background, soft diffused lighting. Hygienic and clinical atmosphere. No brand names. Product photography.",
      chapter: "08",
    },
    {
      id: "ch9-supplements",
      prompt: "Photorealistic overhead shot of daily vitamin and supplement routine: various colorful capsules and tablets arranged in a weekly pill organizer, omega-3 fish oil softgels, vitamin D drops, a glass of water, and a small notebook for tracking. Morning sunlight streaming across a wooden table. Healthy lifestyle feel. No brand names.",
      chapter: "09",
    },
    {
      id: "ch10-storage",
      prompt: "Photorealistic image of a well-organized home medicine cabinet mounted on a bathroom wall, door open showing neatly arranged shelves: medicines sorted by category with small labels, a first aid kit on the top shelf, a digital thermometer, and a child-safety lock visible. Warm, safe, family home atmosphere. Clean and trustworthy feel. No brand names.",
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
