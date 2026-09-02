import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Djblackberry WIP blog",
  DESCRIPTION:
    "Welcome to the Djblackberry64 WIP blog, where I keep you updated and share my opinion and insights.",
  AUTHOR: "Djblackberry64",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "djblackberry64contribute@gmail.com",
    HREF: "mailto:djblackberry64contribute@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "djblackberry64",
    HREF: "https://github.com/djblackberry64/",
  },
  /*
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },*/
  /*
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },*/
  {
    NAME: "Discord",
    ICON: "discord",
    TEXT: "lempire-discord",
    HREF: "https://discord.gg/h24Szhf2tN",
  },
];
