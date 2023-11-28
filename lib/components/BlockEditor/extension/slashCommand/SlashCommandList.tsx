import { SuggestionKeyDownProps, SuggestionProps } from '@tiptap/suggestion';
import { isEmpty, noop } from 'lodash';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { isInViewport } from '../../../../utils';

export interface SlashCommandRef {
  onKeyDown: (props: SuggestionKeyDownProps) => boolean;
}

export const SlashCommandList = forwardRef<SlashCommandRef, SuggestionProps>(
  (props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { items, command } = props;

    const selectItem = (index: number) => {
      const item = items[index];

      if (item) {
        command(item);
      }
    };

    const upHandler = () => {
      setSelectedIndex((prev) => {
        const newIndex = (prev + items.length - 1) % items.length;
        const commandListing = document.getElementById(
          `editor-command-${items[newIndex].title}`
        );
        const commandList = document.getElementById('editor-commands-viewport');
        if (
          commandList &&
          commandListing &&
          !isInViewport(commandListing, commandList)
        ) {
          commandListing.scrollIntoView();
        }

        return newIndex;
      });
    };

    const downHandler = () => {
      setSelectedIndex((prev) => {
        const newIndex = (prev + 1) % items.length;
        const commandListing = document.getElementById(
          `editor-command-${items[newIndex].title}`
        );
        const commandList = document.getElementById('editor-commands-viewport');
        if (
          commandList &&
          commandListing &&
          !isInViewport(commandListing, commandList)
        ) {
          commandListing.scrollIntoView();
        }

        return newIndex;
      });
    };

    const enterHandler = () => {
      selectItem(selectedIndex);
    };

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === 'ArrowUp') {
          upHandler();

          return true;
        }

        if (event.key === 'ArrowDown') {
          downHandler();

          return true;
        }

        if (event.key === 'Enter') {
          enterHandler();

          return true;
        }

        return false;
      },
    }));

    if (isEmpty(items)) {
      return null;
    }

    return (
      <div
        className="flex flex-col slash-menu-wrapper"
        id="editor-commands-viewport"
      >
        {items.map((item, index) => (
          <div
            className={`w-full cursor-pointer p-[12px] flex items-center gap-x-4 ${
              index === selectedIndex ? 'bg-gray-200' : ''
            }`}
            id={`editor-command-${item.title}`}
            key={item.title}
            onClick={() => selectItem(index)}
            onKeyDown={noop}
          >
            <div className="border rounded-[4px] p-2">{item?.icon}</div>
            <div className="flex flex-col">
              <span className="font-bold">{item.title}</span>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
