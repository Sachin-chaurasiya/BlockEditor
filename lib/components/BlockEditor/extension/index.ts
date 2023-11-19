import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import { Focus } from './focus';

export const extensions = [
  StarterKit,
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
  Focus.configure({ mode: 'deepest' }),
];
