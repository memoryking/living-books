"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BackToHome() {
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    setIsEmbed(window.location.search.includes("embed=true"));
  }, []);

  if (isEmbed) return null;

  return (
    <div className="mb-6">
      <Link href="/" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
        ← 전체 목록으로
      </Link>
    </div>
  );
}
