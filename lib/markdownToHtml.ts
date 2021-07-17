import remark from "remark";
import html from "remark-html";
import math from "remark-math";
import htmlKatex from "remark-html-katex";

export default async function markdownToHtml(markdownString: string) {
  const result = await remark()
    .use(html)
    .use(math)
    .use(htmlKatex)
    .process(markdownString);
  console.log(result.toString());
  return result.toString();
}
