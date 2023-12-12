import { BubbleMenu as CoreBubbleMenu, BubbleMenuProps as CoreBubbleMenuProps, Editor, isNodeSelection } from '@tiptap/react';
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
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.00023 5L4 17M13 5L12.9998 17M4 11H12.9998M19.875 19V10L17.625 12.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Heading 2',
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
      icon: (
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
          viewBox="0 0 24 24"
        >
          <path
            d="M3.37402 5V17M12.374 5V17M3.37402 11H12.374M16.302 11.373C16.5035 10.8941 16.8644 10.4997 17.3236 10.2566C17.7829 10.0136 18.312 9.93705 18.8213 10.0399C19.3306 10.1427 19.7886 10.4186 20.1175 10.8207C20.4465 11.2229 20.6262 11.7265 20.626 12.246C20.628 12.694 20.494 13.132 20.242 13.503L16.123 19H20.626"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Heading 3',
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive('heading', { level: 3 }),
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.375 5V17M12.375 5V17M3.375 11H12.375M16.125 10H20.625L18 13.75C18.4317 13.7499 18.8568 13.8564 19.2375 14.0598C19.6183 14.2633 19.943 14.5575 20.1828 14.9165C20.4227 15.2754 20.5703 15.688 20.6127 16.1176C20.655 16.5472 20.5907 16.9807 20.4255 17.3795C20.2603 17.7783 19.9993 18.1303 19.6656 18.4042C19.3319 18.678 18.9358 18.8654 18.5123 18.9496C18.0889 19.0338 17.6513 19.0123 17.2382 18.8869C16.8251 18.7616 16.4492 18.5363 16.144 18.231"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Bold',
      command: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8571 12C13.918 12 14.9354 11.5786 15.6856 10.8284C16.4357 10.0783 16.8571 9.06087 16.8571 8C16.8571 6.93913 16.4357 5.92172 15.6856 5.17157C14.9354 4.42143 13.918 4 12.8571 4H6V12M12.8571 12H6M12.8571 12H14C15.0609 12 16.0783 12.4214 16.8284 13.1716C17.5786 13.9217 18 14.9391 18 16C18 17.0609 17.5786 18.0783 16.8284 18.8284C16.0783 19.5786 15.0609 20 14 20H6V12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Italic',
      command: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8571 4H17.7142M6.28564 20H13.1428M14.2856 4L9.71422 20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Strike',
      command: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0121 12H12.9874C15.1693 12 16.938 13.7909 16.938 16C16.938 18.2091 15.1693 20 12.9874 20H11.0121C8.83024 20 7.06149 18.2091 7.06149 16M16.938 8C16.938 5.79086 15.1693 4 12.9874 4H11.0121C8.83024 4 7.06149 5.79086 7.06149 8C7.06149 8.3453 7.1047 8.68038 7.18595 9M4 12H20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      ariaLabel: 'Inline code',
      command: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
      icon: (
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 16.5L21 12L16.5 7.50002M7.5 7.50002L3 12L7.5 16.5M13.8 3.90002L10.2 20.1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  ];

  const handleShouldShow:CoreBubbleMenuProps['shouldShow']= ({editor,state})=>{
    const { selection } = state;
    const { empty } = selection;

    // don't show bubble menu if:
    // - the selected node is an image
    // - the selection is empty
    // - the selection is a node selection (for drag handles)
    // - link is active
    if (
      editor.isActive('image') ||
      empty ||
      isNodeSelection(selection) ||
      editor.isActive('link') ||
      editor.isActive('table')||
      editor.isActive("gistEmbed")
    ) {
      return false;
    }

    return true;
  }

  return (
    <CoreBubbleMenu className="bubble-menu-wrapper" editor={editor} shouldShow={handleShouldShow}>
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
