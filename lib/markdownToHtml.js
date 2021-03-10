import remark from "remark";
var recommended = require("remark-preset-lint-recommended");
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark(recommended).use(html).process(markdown);
  return result.toString();
}
