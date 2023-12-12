import { useState } from "react";
import { BlockEditor } from "../lib/components/BlockEditor";
import SyntaxHighlighter from "react-syntax-highlighter";
import pretty from "pretty";

function App() {
  const [content, setContent] = useState("");
  const formatted = pretty(content, { ocd: true });

  return (
    <div className="grid grid-cols-2 m-10 gap-4">
      <BlockEditor
        className="col-span-1 border rounded-md min-h-[400px]"
        autoFocus
        onContentChange={(content) => setContent(content)}
      />
      <div className="col-span-1 border rounded-md min-h-[400px] p-[32px]">
        <SyntaxHighlighter language="html" showLineNumbers wrapLines>
          {formatted}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
