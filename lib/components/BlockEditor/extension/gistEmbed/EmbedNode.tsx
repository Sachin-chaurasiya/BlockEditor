import { NodeViewProps } from "@tiptap/core";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { FC } from "react";
import Gist from "react-embed-gist";

export const EmbedNode: FC<NodeViewProps> = ({ node }) => {
  const { gist = "" } = node.attrs;

  console.log(gist);

  return (
    <NodeViewWrapper as="div">
      <Gist gist={gist} titleClass="hidden" />
      <NodeViewContent as="br" />
    </NodeViewWrapper>
  );
};
