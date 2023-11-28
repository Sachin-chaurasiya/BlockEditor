import { Extension } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion';

export const slashMenuPluginKey = new PluginKey('slashSuggestion');

export const SlashCommand = Extension.create({
  name: 'slashCommand',

  addOptions() {
    return {
      ...this.parent?.(),
      slashSuggestion: {
        char: '/',
        startOfLine: true,
        command: ({ editor, range, props }) => {
          props.command({ editor, range, props });
        },
      } as Partial<SuggestionOptions>,
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        pluginKey: slashMenuPluginKey,
        ...this.options.slashSuggestion,
        editor: this.editor,
      }),
    ];
  },
});
