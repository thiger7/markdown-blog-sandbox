import { md } from "../constants/md";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import remarkGfm from "remark-gfm";

export default function MarkdownPreview({content}: {content: string}) {
  return (
    <div>
      <Markdown
        className="prose"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre(props) {
            const { node, ...rest } = props;
            return <pre className="bg-white" {...rest} />;
          },
          a(props) {
            const { node, ...rest } = props;
            return <a className="text-blue-500" {...rest} />;
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
