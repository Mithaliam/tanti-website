import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type MediaItem = {
  path: string;
  type: "image" | "video";
};

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

function isMediaFile(filePath: string): MediaItem["type"] | null {
  const ext = path.extname(filePath).toLowerCase();
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (VIDEO_EXTENSIONS.has(ext)) return "video";
  return null;
}

async function walk(dir: string, basePublicDir: string, results: MediaItem[] = []): Promise<MediaItem[]> {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, basePublicDir, results);
    } else if (entry.isFile()) {
      const kind = isMediaFile(fullPath);
      if (kind) {
        const relFromPublic = fullPath.substring(basePublicDir.length).replace(/\\/g, "/");
        const publicPath = relFromPublic.startsWith("/") ? relFromPublic : `/${relFromPublic}`;
        results.push({ path: publicPath, type: kind });
      }
    }
  }
  return results;
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const tantiDir = path.join(publicDir, "tanti");
    const exists = fs.existsSync(tantiDir);
    if (!exists) {
      return NextResponse.json({ items: [] as MediaItem[] }, { status: 200 });
    }
    const items = await walk(tantiDir, publicDir);
    return NextResponse.json({ items }, { headers: { "Cache-Control": "public, max-age=300, stale-while-revalidate=600" } });
  } catch (error) {
    return NextResponse.json({ items: [] as MediaItem[], error: "failed_to_list" }, { status: 200 });
  }
}


