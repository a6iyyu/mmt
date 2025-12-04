import type { ChangeEvent, ReactElement, ReactNode } from "react";
import { Interface } from "@/utils/decorator";

/**
 * @description Interface untuk komponen Input
 * @property {ReactNode} icon - Ikon input
 * @property {string | null} [info] - Informasi tambahan
 * @property {string} label - Label input
 * @property {string} name - Nama input
 * @property {(value: ChangeEvent<HTMLInputElement>) => void | null} [onChange] - Fungsi saat nilai berubah
 * @property {string} [placeholder] - Placeholder input
 * @property {boolean} required - Apakah input wajib diisi
 * @property {"text" | "date" | "email" | "file" | "password" | "number"} type - Tipe input
 * @property {string | number | readonly string[] | undefined} [value] - Nilai input
 */
@Interface
class Input {
  icon: ReactNode;
  info?: string | null;
  label!: string;
  name!: string;
  onChange?: ((value: ChangeEvent<HTMLInputElement>) => void) | null;
  placeholder?: string;
  required!: boolean;
  type!: "text" | "date" | "email" | "file" | "password" | "number";
  value?: string | number | readonly string[] | undefined;
}

/**
 * @description Interface untuk komponen Select
 * @property {string} label - Label select
 * @property {string} name - Nama select
 * @property {(value: string) => void} [onChange] - Fungsi saat nilai berubah
 * @property {Array<{ label: string; value: string }>} options - Opsi select
 * @property {boolean} required - Apakah select wajib diisi
 * @property {string} [value] - Nilai select
 */
@Interface
class Select {
  label!: string;
  name!: string;
  onChange?: (value: string) => void;
  options!: Array<{ label: string; value: string }>;
  required!: boolean;
  value?: string;
}

/**
 * @description Interface untuk komponen Sidebar
 * @property {string} [href] - Link tujuan sidebar
 * @property {ReactElement} [icon] - Ikon sidebar
 * @property {boolean} [isOpen] - Status terbuka/tutup sidebar
 * @property {string} [label] - Label sidebar
 * @property {() => void} [onClose] - Fungsi untuk menutup sidebar
 * @property {Sidebar[]} [subMenu] - Submenu sidebar
 */
@Interface
class Sidebar {
  href?: string;
  icon?: ReactElement;
  isOpen?: boolean;
  label?: string;
  onClose?: () => void;
  subMenu?: Sidebar[];
};

/**
 * @description Interface untuk komponen Table
 * @property {string[]} headers - Header tabel
 * @property {ReactNode[][]} rows - Baris tabel
 * @property {string[]} sortable - Kolom yang dapat diurutkan
 */
@Interface
class Table {
  headers!: string[];
  rows!: ReactNode[][];
  sortable!: string[];
}

export type { Input, Select, Sidebar, Table };