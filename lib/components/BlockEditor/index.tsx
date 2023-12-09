import { EditorContent, Extension, useEditor } from '@tiptap/react';
import '../../styles/main.css';
import { extensions as defaultExtensions } from './extension';
import { EditorProps } from '@tiptap/pm/view';
import { FC } from 'react';
import BubbleMenu from '../Menu/BubbleMenu';
import BarMenu from '../Menu/BarMenu';

export interface BlockEditorProps {
  onContentChange?: (content: string) => void;
  content?: string;
  className?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  extensions?: Extension[];
  editorProps?: EditorProps;
  menuType?: 'bubble' | 'bar';
}

export const BlockEditor: FC<BlockEditorProps> = ({
  autoFocus,
  className,
  content,
  editorProps,
  extensions,
  onContentChange,
  readOnly,
  menuType = 'bubble',
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
      {menuType === 'bar' && (
        <div className="m-[40px] rounded-lg border min-h-[300px]">
          {editor && <BarMenu editor={editor} />}
          <div className="h-full w-full p-[16px]">
            <EditorContent editor={editor} />
          </div>
        </div>
      )}
      {menuType === 'bubble' && (
        <>
          <EditorContent editor={editor} />
          {editor && <BubbleMenu editor={editor} />}
        </>
      )}
    </div>
  );
};
