export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
}

export type Links = {
  TEXT: string;
  HREF: string;
}[];

export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];
