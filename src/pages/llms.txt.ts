import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const docs = await getCollection("docs");

export const GET: APIRoute = async ({ }) => {
  return new Response(
    `# ShokaX Astro Blog Documentation\n\n${docs
      .map((doc) => {
        return `- [${doc.data.title}](https://docs.astro.kaitaku.xyz/${doc.id}/)\n`;
      })
      .join("")}`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
};