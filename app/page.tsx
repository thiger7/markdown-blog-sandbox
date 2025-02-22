import MarkdownPreview from "./_components/markdown_preview";
import { md } from "./constants/md";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto">
      <MarkdownPreview content={md} />
    </main>
  );
}
