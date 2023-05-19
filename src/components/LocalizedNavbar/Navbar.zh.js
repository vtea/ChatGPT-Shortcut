const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://ai.cn2.ltd",
      label: "Ai cn2",
      position: "left",
    },
    {
      type: 'dropdown',
      label: 'openai',
      position: 'left',
      items: [
        {
          label: 'Chat',
          href: 'https://chat.openai.com',
        },
        {
          label: 'platform',
          href: 'https://platform.openai.com',
        },
        {
          label: 'community',
          href: 'https://community.openai.com/',
        },
        {
          label: 'status',
          href: 'https://status.openai.com/',
        },

      ],
    },
    {
      to: "https://chat.aiprm.top",
      label: "在线体验",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/openai",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://twitter.com/OpenAI",
      position: "right",
      className: "header-twitter-link",
    },
  ],
};

module.exports = zhNavbar;
