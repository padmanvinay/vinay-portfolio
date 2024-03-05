export type PageTypes = "home" | "contact" | "work";

export type NavItem = {
  name: PageTypes;
  displayName: string;
  path: string;
};
