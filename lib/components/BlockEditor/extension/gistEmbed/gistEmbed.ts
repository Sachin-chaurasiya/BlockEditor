import {
  Node,
  mergeAttributes,
  nodeInputRule,
  nodePasteRule,
} from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { EmbedNode } from "./EmbedNode";

export interface GitsOptions {
  HTMLAttributes: Record<string, unknown>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    gistEmbed: {
      setgistEmbed: (options: { gist: string }) => ReturnType;
    };
  }
}

export const GistEmbed = Node.create<GitsOptions>({
  name: "gistEmbed",
  draggable: false,
  group: "block",
  inline: false,
  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      gist: {
        default: null,
        parseHTML: (element) => element.getAttribute("gist")?.toString(),
        renderHTML: (attributes) => {
          if (!attributes.gist) {
            return {};
          }

          return {
            gist: attributes.gist,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "gistembed[gist]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "gistembed",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setgistEmbed:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^gist $/,
        type: this.type,
      }),
    ];
  },

  addPasteRules() {
    return [
      nodePasteRule({
        find: /https:\/\/gist\.github\.com\/([a-zA-Z0-9_-]+)\/([a-f0-9]+)/g,
        type: this.type,
        getAttributes: (match) => {
          const [, userName, gistId] = match;

          return { gist: `${userName}/${gistId}` };
        },
      }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(EmbedNode);
  },
});
