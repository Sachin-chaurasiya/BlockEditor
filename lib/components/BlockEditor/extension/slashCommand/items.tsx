import { Editor, Range } from '@tiptap/core';
import { ReactNode } from 'react';

export enum SuggestionItemType {
  BASIC_BLOCKS = 'Basic',
  ADVANCED_BLOCKS = 'Advanced',
}

interface CommandProps {
  editor: Editor;
  range: Range;
}

export interface SuggestionItem {
  title: string;
  description: string;
  type: SuggestionItemType;
  searchTerms: string[];
  icon?: ReactNode;
  command: (props: CommandProps) => void;
}

export const getSuggestionItems = (props: {
  query: string;
  editor: Editor;
}) => {
  const { query } = props;
  const suggestionItems: SuggestionItem[] = [
    {
      title: 'Text',
      description: 'Start writing with plain text',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode('paragraph', 'paragraph')
          .run(),

      searchTerms: ['p', 'paragraph'],
      icon: (
        <svg className="slash-menu-icon" viewBox="0 0 448 512">
          <path d="M448 48v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64H240v384h72a8 8 0 018 8v16a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h72V64H32v56a8 8 0 01-8 8H8a8 8 0 01-8-8V48a16 16 0 0116-16h416a16 16 0 0116 16z"></path>
        </svg>
      ),
    },
    {
      title: 'H1',
      description: 'Big heading',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 1 })
          .run(),

      searchTerms: ['title', 'big', 'large'],
      icon: (
        <svg
          className="slash-menu-icon-with-strokes"
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
      title: 'H2',
      description: 'Medium heading',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 2 })
          .run(),

      searchTerms: ['subtitle', 'medium'],
      icon: (
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="slash-menu-icon-with-strokes"
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
      title: 'H3',
      description: 'Small heading',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 3 })
          .run(),

      searchTerms: ['subtitle', 'small'],
      icon: (
        <svg
          className="slash-menu-icon-with-strokes"
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
      title: 'Bullet List',
      description: 'Create a simple bullet list',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor.chain().focus().deleteRange(range).toggleBulletList().run(),

      searchTerms: ['unordered', 'point'],
      icon: (
        <svg className="slash-menu-icon" viewBox="0 0 512 512">
          <path d="M64 64c17.67 0 32 14.33 32 32 0 17.7-14.33 32-32 32s-32-14.3-32-32c0-17.67 14.33-32 32-32zm432 16c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16 0-8.84 7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zM64 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm0 96c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32z"></path>
        </svg>
      ),
    },
    {
      title: 'Numbered List',
      description: 'Create a simple numbered list',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor.chain().focus().deleteRange(range).toggleOrderedList().run(),

      searchTerms: ['ordered'],
      icon: (
        <svg className="slash-menu-icon" viewBox="0 0 576 512">
          <path d="M64 48.04c0-8.84 7.16-16 16-16h32c8.8 0 16 7.16 16 16V192h32c8.8 0 16 7.2 16 16 0 8.9-7.2 16-16 16H64c-8.84 0-16-7.1-16-16 0-8.8 7.16-16 16-16h32V64.04H80c-8.84 0-16-7.17-16-16zM224 96c0-8.84 7.2-16 16-16h288c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zM75.31 339.3c-6.24 6.3-16.37 6.3-22.62 0-6.25-6.2-6.25-16.4 0-22.6l15.41-15.4c24.18-24.2 63.8-22.9 86.3 2.8 20 22 19.4 57.1-1.3 79.3L92.82 448H160c8.8 0 16 7.2 16 16s-7.2 16-16 16H56c-6.37 0-12.13-3.8-14.67-9.6-2.54-5.9-1.37-12.7 2.97-17.3l85.4-91.5c9.5-10.2 9.8-25.9.6-36.4-11.2-11.8-28.5-12.4-39.57-1.3l-15.42 15.4z"></path>
        </svg>
      ),
    },
    {
      title: 'Divider',
      description: 'Insert a dividing line',
      type: SuggestionItemType.BASIC_BLOCKS,
      command: ({ editor, range }) =>
        editor.chain().focus().deleteRange(range).setHorizontalRule().run(),

      searchTerms: ['separator'],
      icon: (
        <svg className="slash-menu-icon" viewBox="0 0 24 24">
          <path d="M21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM7.54601 7.89101L7.8865 7.22275L7.54601 7.89101ZM7.10899 7.45399L7.77725 7.1135L7.10899 7.45399ZM16.891 7.45399L16.2228 7.1135L16.891 7.45399ZM16.454 7.89101L16.1135 7.22275L16.454 7.89101ZM16.454 4.10899L16.1135 4.77725L16.454 4.10899ZM16.891 4.54601L16.2228 4.8865L16.891 4.54601ZM7.54601 4.10899L7.8865 4.77725L7.54601 4.10899ZM7.10899 4.54601L7.77725 4.8865L7.10899 4.54601ZM7.54601 19.891L7.8865 19.2228L7.54601 19.891ZM7.10899 19.454L7.77725 19.1135L7.10899 19.454ZM16.891 19.454L16.2228 19.1135L16.891 19.454ZM16.454 19.891L16.1135 19.2228L16.454 19.891ZM16.454 16.109L16.1135 16.7772L16.454 16.109ZM16.891 16.546L16.2228 16.8865L16.891 16.546ZM7.54601 16.109L7.8865 16.7772L7.54601 16.109ZM7.10899 16.546L7.77725 16.8865L7.10899 16.546ZM21 11.25H3V12.75H21V11.25ZM8.6 4.75H15.4V3.25H8.6V4.75ZM16.25 5.6V6.4H17.75V5.6H16.25ZM15.4 7.25H8.6V8.75H15.4V7.25ZM7.75 6.4V5.6H6.25V6.4H7.75ZM8.6 7.25C8.3076 7.25 8.1334 7.24942 8.00428 7.23887C7.8839 7.22903 7.87011 7.2144 7.8865 7.22275L7.20552 8.55926C7.43582 8.67661 7.669 8.71647 7.88213 8.73388C8.08651 8.75058 8.33235 8.75 8.6 8.75V7.25ZM6.25 6.4C6.25 6.66765 6.24942 6.91349 6.26611 7.11787C6.28353 7.331 6.32339 7.56418 6.44074 7.79448L7.77725 7.1135C7.7856 7.12989 7.77097 7.1161 7.76113 6.99572C7.75058 6.8666 7.75 6.6924 7.75 6.4H6.25ZM7.8865 7.22275C7.83946 7.19878 7.80122 7.16054 7.77725 7.1135L6.44074 7.79448C6.60852 8.12377 6.87623 8.39148 7.20552 8.55926L7.8865 7.22275ZM16.25 6.4C16.25 6.6924 16.2494 6.8666 16.2389 6.99572C16.229 7.1161 16.2144 7.12989 16.2228 7.1135L17.5593 7.79448C17.6766 7.56418 17.7165 7.331 17.7339 7.11787C17.7506 6.91349 17.75 6.66765 17.75 6.4H16.25ZM15.4 8.75C15.6677 8.75 15.9135 8.75058 16.1179 8.73388C16.331 8.71647 16.5642 8.67661 16.7945 8.55926L16.1135 7.22275C16.1299 7.2144 16.1161 7.22903 15.9957 7.23887C15.8666 7.24942 15.6924 7.25 15.4 7.25V8.75ZM16.2228 7.1135C16.1988 7.16054 16.1605 7.19878 16.1135 7.22275L16.7945 8.55926C17.1238 8.39148 17.3915 8.12377 17.5593 7.79448L16.2228 7.1135ZM15.4 4.75C15.6924 4.75 15.8666 4.75058 15.9957 4.76113C16.1161 4.77097 16.1299 4.7856 16.1135 4.77725L16.7945 3.44074C16.5642 3.32339 16.331 3.28353 16.1179 3.26612C15.9135 3.24942 15.6677 3.25 15.4 3.25V4.75ZM17.75 5.6C17.75 5.33235 17.7506 5.08651 17.7339 4.88213C17.7165 4.669 17.6766 4.43582 17.5593 4.20552L16.2228 4.8865C16.2144 4.87011 16.229 4.8839 16.2389 5.00428C16.2494 5.1334 16.25 5.3076 16.25 5.6H17.75ZM16.1135 4.77725C16.1605 4.80122 16.1988 4.83946 16.2228 4.8865L17.5593 4.20552C17.3915 3.87623 17.1238 3.60852 16.7945 3.44074L16.1135 4.77725ZM8.6 3.25C8.33235 3.25 8.08651 3.24942 7.88213 3.26612C7.669 3.28353 7.43582 3.32339 7.20552 3.44074L7.8865 4.77725C7.87011 4.7856 7.8839 4.77097 8.00428 4.76113C8.1334 4.75058 8.3076 4.75 8.6 4.75V3.25ZM7.75 5.6C7.75 5.3076 7.75058 5.1334 7.76113 5.00428C7.77097 4.8839 7.7856 4.87011 7.77725 4.8865L6.44074 4.20552C6.32339 4.43582 6.28353 4.669 6.26611 4.88213C6.24942 5.08651 6.25 5.33235 6.25 5.6H7.75ZM7.20552 3.44074C6.87623 3.60852 6.60852 3.87623 6.44074 4.20552L7.77725 4.8865C7.80122 4.83946 7.83946 4.80122 7.8865 4.77725L7.20552 3.44074ZM8.6 16.75H15.4V15.25H8.6V16.75ZM16.25 17.6V18.4H17.75V17.6H16.25ZM15.4 19.25H8.6V20.75H15.4V19.25ZM7.75 18.4V17.6H6.25V18.4H7.75ZM8.6 19.25C8.3076 19.25 8.1334 19.2494 8.00428 19.2389C7.8839 19.229 7.87011 19.2144 7.8865 19.2228L7.20552 20.5593C7.43582 20.6766 7.669 20.7165 7.88213 20.7339C8.08651 20.7506 8.33235 20.75 8.6 20.75V19.25ZM6.25 18.4C6.25 18.6677 6.24942 18.9135 6.26611 19.1179C6.28353 19.331 6.32339 19.5642 6.44074 19.7945L7.77725 19.1135C7.7856 19.1299 7.77097 19.1161 7.76113 18.9957C7.75058 18.8666 7.75 18.6924 7.75 18.4H6.25ZM7.8865 19.2228C7.83946 19.1988 7.80122 19.1605 7.77725 19.1135L6.44074 19.7945C6.60852 20.1238 6.87623 20.3915 7.20552 20.5593L7.8865 19.2228ZM16.25 18.4C16.25 18.6924 16.2494 18.8666 16.2389 18.9957C16.229 19.1161 16.2144 19.1299 16.2228 19.1135L17.5593 19.7945C17.6766 19.5642 17.7165 19.331 17.7339 19.1179C17.7506 18.9135 17.75 18.6677 17.75 18.4H16.25ZM15.4 20.75C15.6677 20.75 15.9135 20.7506 16.1179 20.7339C16.331 20.7165 16.5642 20.6766 16.7945 20.5593L16.1135 19.2228C16.1299 19.2144 16.1161 19.229 15.9957 19.2389C15.8666 19.2494 15.6924 19.25 15.4 19.25V20.75ZM16.2228 19.1135C16.1988 19.1605 16.1605 19.1988 16.1135 19.2228L16.7945 20.5593C17.1238 20.3915 17.3915 20.1238 17.5593 19.7945L16.2228 19.1135ZM15.4 16.75C15.6924 16.75 15.8666 16.7506 15.9957 16.7611C16.1161 16.771 16.1299 16.7856 16.1135 16.7772L16.7945 15.4407C16.5642 15.3234 16.331 15.2835 16.1179 15.2661C15.9135 15.2494 15.6677 15.25 15.4 15.25V16.75ZM17.75 17.6C17.75 17.3323 17.7506 17.0865 17.7339 16.8821C17.7165 16.669 17.6766 16.4358 17.5593 16.2055L16.2228 16.8865C16.2144 16.8701 16.229 16.8839 16.2389 17.0043C16.2494 17.1334 16.25 17.3076 16.25 17.6H17.75ZM16.1135 16.7772C16.1605 16.8012 16.1988 16.8395 16.2228 16.8865L17.5593 16.2055C17.3915 15.8762 17.1238 15.6085 16.7945 15.4407L16.1135 16.7772ZM8.6 15.25C8.33235 15.25 8.08651 15.2494 7.88213 15.2661C7.66899 15.2835 7.43582 15.3234 7.20552 15.4407L7.8865 16.7772C7.87011 16.7856 7.8839 16.771 8.00428 16.7611C8.1334 16.7506 8.3076 16.75 8.6 16.75V15.25ZM7.75 17.6C7.75 17.3076 7.75058 17.1334 7.76113 17.0043C7.77097 16.8839 7.7856 16.8701 7.77725 16.8865L6.44074 16.2055C6.32339 16.4358 6.28353 16.669 6.26611 16.8821C6.24942 17.0865 6.25 17.3323 6.25 17.6H7.75ZM7.20552 15.4407C6.87623 15.6085 6.60852 15.8762 6.44074 16.2055L7.77725 16.8865C7.80122 16.8395 7.83946 16.8012 7.8865 16.7772L7.20552 15.4407Z"></path>
        </svg>
      ),
    },
    // advanced blocks
    {
      title: 'Code Block',
      description: 'Add a block of code',
      type: SuggestionItemType.ADVANCED_BLOCKS,
      command: ({ editor, range }) =>
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),

      searchTerms: ['codeblock'],
      icon: (
        <svg
          className="slash-menu-icon slash-menu-icon-with-strokes"
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

    {
      title: 'Quote',
      description: 'Add a quote',
      type: SuggestionItemType.ADVANCED_BLOCKS,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode('paragraph', 'paragraph')
          .toggleBlockquote()
          .run(),

      searchTerms: ['blockquote'],
      icon: (
        <svg className="slash-menu-icon" viewBox="0 0 448 512">
          <path d="M432 80c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H16c-8.836 0-16-7.2-16-16 0-8.84 7.164-16 16-16h416zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h288zM128 416c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zM0 240c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v192c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V240z"></path>
        </svg>
      ),
    },
  ];

  const filteredItems = suggestionItems.filter((item) => {
    if (typeof query === 'string' && query.length > 0) {
      const search = query.toLowerCase();

      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.searchTerms?.some((term: string) => term.includes(search))
      );
    }

    return true;
  });

  return filteredItems;
};
