export type Info = {
  title: string;
  subTitle: string;
  paraText: string;
  listItems: string[];
  linkItems?: Link[];
  containsLinks?: boolean;
};

export type Link = {
  title: string;
  url: string;
};
