import remark from "remark";
import html from "remark-html";
import math from "remark-math";
import htmlKatex from "remark-html-katex";
import gfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

export default async function markdownToHtml(markdownString: string) {
  const result = await remark()
    .use(html)
    .use(gfm)
    // .use(slug)
    // .use(toc, { heading: "目次", maxDepth: 2 })
    .use(math)
    .use(htmlKatex)
    // .use(rehypeKatex)
    .process(markdownString);
  return result.toString();
}
