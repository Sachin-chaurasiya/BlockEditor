import { EditorContent, Extension, useEditor } from '@tiptap/react';
import './block-editor.css';
import { extensions as defaultExtensions } from './extension';
import { EditorProps } from '@tiptap/pm/view';
import { FC } from 'react';

export interface BlockEditorProps {
  onContentChange?: (content: string) => void;
  content?: string;
  className?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  extensions?: Extension[];
  editorProps?: EditorProps;
}

export const BlockEditor: FC<BlockEditorProps> = ({
  autoFocus,
  className,
  content,
  editorProps,
  extensions,
  onContentChange,
  readOnly,
}) => {
  const editor = useEditor({
    extensions: [...defaultExtensions, ...(extensions ?? [])],
    onUpdate({ editor }) {
      const htmlContent = editor.getHTML();

      if (onContentChange) {
        onContentChange(htmlContent);
      }
    },
    editorProps: {
      attributes: {
        class: 'block-editor',
      },
      ...editorProps,
    },
    content: content,
    autofocus: autoFocus,
    editable: !readOnly,
  });
  return (
    <div
      className={`block-editor-wrapper ${className}`}
      id="block-editor-wrapper"
    >
      <EditorContent editor={editor} />
    </div>
  );
};
