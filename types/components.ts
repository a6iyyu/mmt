import type { ChangeEvent, ChangeEventHandler, ReactElement, ReactNode } from "react";

type Input = {
  icon: ReactNode;
  info?: string | null;
  label: string;
  name: string;
  onChange?: ((value: ChangeEvent<HTMLInputElement>) => void) | null;
  placeholder?: string;
  required: boolean;
  type: "text" | "date" | "email" | "file" | "password" | "number";
  value?: string | number | readonly string[] | undefined;
}

type Select = {
  label: string;
  name: string;
  onChange?: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  required: boolean;
  value?: string;
}

type Sidebar = {
  href?: string;
  icon?: ReactElement;
  isOpen?: boolean;
  label?: string;
  onClose?: () => void;
  subMenu?: Sidebar[];
};

type Table = {
  headers: string[];
  rows: ReactNode[][];
  sortable: string[];
}

type TextArea = {
  label: string;
  name: string;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required: boolean;
  value?: string;
}

export type { Input, Select, Sidebar, Table, TextArea };