"use client";

import { Bell, Briefcase, ChevronRight, GraduationCap, LayoutDashboard, LogOut, type LucideIcon, Microscope, Settings, UserCircle, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { Footer } from "@/components/common/footer";
import { PublicHeader } from "@/components/common/header";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/hooks/useSidebar";
import { ADMIN, LOGIN } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

type AdminNavigation = {
  name: string;
  href?: string;
  icon: LucideIcon;
  submenu?: {
    name: string;
    href: string;
  }[];
};

const adminNavigation: AdminNavigation[] = [
  { name: "Dasbor", href: "/admin", icon: LayoutDashboard },
  {
    name: "Pelatihan",
    icon: GraduationCap,
    submenu: [{ name: "Daftar Pelatihan", href: "/admin/pelatihan" }],
  },
  {
    name: "Karya",
    icon: Briefcase,
    submenu: [{ name: "Daftar Karya", href: "/admin/karya" }],
  },
  { name: "Dosen", href: "/admin/dosen", icon: Users },
  { name: "Mahasiswa", href: "/admin/mahasiswa", icon: GraduationCap },
  { name: "Riset", href: "/admin/riset", icon: Microscope },
];

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  if (pathname.startsWith(LOGIN)) {
    return <main className="min-h-screen w-full bg-white">{children}</main>;
  }

  if (pathname.startsWith(ADMIN)) {
    return (
      <SidebarProvider defaultOpen={true}>
        <Sidebar
          variant="sidebar"
          className="z-50 border-r-0 bg-[#3b82f6] text-white"
        >
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1">
                <Image
                  height={40}
                  width={40}
                  src="/images/mascot.png"
                  alt="Lab MMT"
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="flex flex-col overflow-hidden">
                <h5 className="truncate text-sm leading-none font-bold text-white">
                  Lab MMT
                </h5>
                <h5 className="truncate text-[10px] leading-tight text-white opacity-70">
                  Multimedia & Mobile
                </h5>
              </span>
            </div>
          </SidebarHeader>
          <SidebarSeparator className="bg-white/10" />
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {adminNavigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    {item.submenu ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                            <item.icon className="size-4" />
                            <span className="font-medium">{item.name}</span>
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-white/20">
                            {item.submenu.map((sub) => (
                              <SidebarMenuSubItem key={sub.name}>
                                <SidebarMenuSubButton
                                  asChild
                                  className="text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                  <Link href={sub.href}>{sub.name}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        className="text-white hover:bg-white/10 hover:text-white"
                      >
                        <Link href={item.href || "#"}>
                          <item.icon className="size-4" />
                          <h5 className="font-medium">{item.name}</h5>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-white/10 p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-white transition-colors hover:bg-red-500/20 hover:text-red-100">
                  <LogOut className="size-4" />
                  <h5>Keluar Akun</h5>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-[#fdfcf6]">
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="-ml-1" />
              <SidebarSeparator orientation="vertical" className="mr-2 h-4" />
              <h2 className="text-sm font-semibold text-slate-700">
                Admin Panel
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100">
                <Bell className="size-5" />
                <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group flex items-center gap-3 pl-2 outline-none">
                    <span className="hidden text-right sm:block">
                      <p className="text-xs font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                        Administrator
                      </p>
                      <p className="text-[10px] leading-none text-slate-500">
                        admin@labmmt.ac.id
                      </p>
                    </span>
                    <Avatar className="h-9 w-9 border-2 border-slate-100 transition-all group-hover:border-blue-100">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-blue-50 text-blue-600">
                        AD
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  align="end"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="font-normal">
                    <span className="flex flex-col space-y-1">
                      <p className="text-sm leading-none font-medium">
                        Super Admin
                      </p>
                      <p className="text-muted-foreground text-xs leading-none">
                        admin@labmmt.ac.id
                      </p>
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserCircle className="mr-2 h-4 w-4" />
                      <span>Profil Saya</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Pengaturan</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Keluar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <>
      <ScrollIndicator />
      <PublicHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}