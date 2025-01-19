import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export async function parseMarkdown(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return result.toString();
}
