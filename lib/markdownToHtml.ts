import remark from "remark";
import html from "remark-html";
import math from "remark-math";
import htmlKatex from "remark-html-katex";
import gfm from "remark-gfm";

export default async function markdownToHtml(markdownString: string) {
  const result = await remark()
    .use(html)
    .use(gfm)
    .use(math)
    .use(htmlKatex)
    .process(markdownString);
  return result.toString();
}
