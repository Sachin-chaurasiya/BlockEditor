import { Editor, Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands {
    selectedText: {
      getSelectedText: () => ({ editor }: { editor: Editor }) => string | null;
    };
  }
}

export default Extension.create({
  name: 'SelectedText',
  addCommands: () => {
    return {
      getSelectedText:
        () =>
        ({ editor }) => {
          const { from, to, empty } = editor.state.selection;

          if (empty) {
            return null;
          }

          return editor.state.doc.textBetween(from, to, ' ');
        },
    };
  },
});
