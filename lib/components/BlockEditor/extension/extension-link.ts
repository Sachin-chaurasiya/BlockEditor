import Link from '@tiptap/extension-link';

export default Link.extend({
  inclusive: false,
  addOptions() {
    return {
      openOnClick: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: 'http',
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
        class: null,
      },
      validate: (url) => !!url,
    };
  },
});
