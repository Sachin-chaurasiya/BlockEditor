import { BubbleMenu as CoreBubbleMenu, Editor } from '@tiptap/react';
import { FC } from 'react';

export interface BubbleMenuProps {
  editor: Editor;
}

const BubbleMenu: FC<BubbleMenuProps> = ({ editor }) => {
  const menuItems = [
    {
      ariaLabel: 'Heading 1',
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
      icon: 'H1',
    },
    {
      ariaLabel: 'Heading 2',
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
      icon: 'H2',
    },
    {
      ariaLabel: 'Heading 3',
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive('heading', { level: 3 }),
      icon: 'H3',
    },
    {
      ariaLabel: 'Bold',
      command: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
      icon: 'B',
    },
    {
      ariaLabel: 'Italic',
      command: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
      icon: 'I',
    },
    {
      ariaLabel: 'Strike',
      command: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
      icon: 'S',
    },
    {
      ariaLabel: 'Inline code',
      command: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
      icon: 'Code',
    },
  ];

  return (
    <CoreBubbleMenu className="bubble-menu-wrapper" editor={editor}>
      <div className="menu-item-wrapper">
        {menuItems.map((item) => (
          <button
            key={item.ariaLabel}
            className={`${item.isActive() ? 'active' : ''}`}
            onClick={item.command}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </CoreBubbleMenu>
  );
};

export default BubbleMenu;
