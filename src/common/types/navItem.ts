export type PageTypes = "home" | "contact" | "work" | "skills";

export type NavItem = {
  name: PageTypes;
  displayName: string;
  path: string;
};
