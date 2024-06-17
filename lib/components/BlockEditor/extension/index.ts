import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import { SlashCommand } from './slashCommand';
import { getSuggestionItems } from './slashCommand/items';
import renderItems from './slashCommand/renderItems';
import Focus from '@tiptap/extension-focus';
import Highlight from '@tiptap/extension-highlight';
import SelectedText from './extension-selectedText';
import Link from './extension-link';
import Image from '@tiptap/extension-image';

export const extensions = [
  StarterKit.configure({
    dropcursor: {
      width: 4,
      color: '#ebf6fe',
    },
  }),
  Placeholder.configure({
    showOnlyWhenEditable: true,
    includeChildren: true,
    showOnlyCurrent: false,
    emptyEditorClass: 'is-editor-empty',
    emptyNodeClass: 'is-node-empty',
    placeholder: ({ editor: coreEditor, node }) => {
      if (coreEditor.isDestroyed) {
        return '';
      }
      if (node.type.name === 'heading') {
        return `Heading ${node.attrs.level}`;
      }

      return 'Type "/" for commands...';
    },
  }),
  Focus.configure({ mode: 'deepest', className: 'has-focus' }),
  SlashCommand.configure({
    slashSuggestion: {
      items: getSuggestionItems,
      render: renderItems,
    },
  }),
  Highlight,
  SelectedText,
  Link,
  Image.configure({
    inline: true,
    HTMLAttributes: {
      class: 'block-editor-image-node',
    },
    allowBase64: true,
  }),
];
