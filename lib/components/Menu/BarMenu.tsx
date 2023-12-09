import { Editor } from '@tiptap/react';
import { FC, Fragment } from 'react';

export interface BarMenuProps {
  editor: Editor;
}

const BarMenu: FC<BarMenuProps> = ({ editor }) => {
  const Formats = [
    [
      {
        name: 'bold',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/bold.svg',
        command: () => editor.chain().focus().toggleBold().run(),
        isActive: () => editor.isActive('bold'),
      },
      {
        name: 'italic',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/italic.svg',
        command: () => editor.chain().focus().toggleItalic().run(),
        isActive: () => editor.isActive('italic'),
      },
      {
        name: 'strike',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/text-strike.svg',
        command: () => editor.chain().focus().toggleStrike().run(),
        isActive: () => editor.isActive('strike'),
      },
    ],
    [
      {
        name: 'inline-code',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/inline-code.svg',
        command: () => editor.chain().focus().toggleCode().run(),
        isActive: () => editor.isActive('code'),
      },
      {
        name: 'highlight',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/highlight.svg',
        command: () => editor.chain().focus().run(),
        isActive: () => false,
        disabled: true,
      },
    ],
    [
      {
        name: 'unordered-list',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/unordered-list.svg',
        command: () => editor.chain().focus().toggleBulletList().run(),
        isActive: () => editor.isActive('bulletList'),
      },
      {
        name: 'ordered-list',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/ordered-list.svg',
        command: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.isActive('orderedList'),
      },
    ],
    [
      {
        name: 'link',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/link.svg',
        command: () => editor.chain().focus().run(),
        isActive: () => false,
        disabled: true,
      },
      {
        name: 'image',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/image.svg',
        command: () => editor.chain().focus().run(),
        isActive: () => false,
        disabled: true,
      },
      {
        name: 'code-block',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/code-block.svg',
        command: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => editor.isActive('codeBlock'),
      },
      {
        name: 'block-quote',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/block-quote.svg',
        command: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: () => editor.isActive('blockquote'),
      },
      {
        name: 'horizontal-line',
        icon: 'https://raw.githubusercontent.com/Sachin-chaurasiya/rich-text-editor-icons/main/icons/horizontal-line.svg',
        command: () => editor.chain().focus().setHorizontalRule().run(),
        isActive: () => false,
      },
    ],
  ];

  return (
    <div className="flex flex-row gap-2 border-b p-[8px]">
      {Formats.map((format, index) => {
        return (
          <Fragment key={`format-group-${index}`}>
            <div className="flex">
              {format.map((item) => {
                return (
                  <button
                    disabled={item?.disabled}
                    key={item.name}
                    className={`rounded-md ${
                      item.isActive() ? 'bg-gray-100' : ''
                    } ${
                      item?.disabled ? 'cursor-not-allowed bg-opacity-50' : ''
                    }}`}
                    onClick={item.command}
                  >
                    <img src={item.icon} alt={item.name} />
                  </button>
                );
              })}
            </div>
            {index !== Formats.length - 1 && <div className="border-l"></div>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default BarMenu;
