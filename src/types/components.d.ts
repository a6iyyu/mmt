import type { ReactElement, ReactNode } from "react";

type SidebarItem = {
  href?: string;
  icon: ReactElement;
  label: string;
  subMenu?: SidebarItem[];
};

type Sidebar = SidebarItem & {
  isOpen: boolean;
  onClose: () => void;
};

type Table = {
  headers: string[];
  rows: ReactNode[][];
  sortable: string[];
};

export { Sidebar, SidebarItem, Table };