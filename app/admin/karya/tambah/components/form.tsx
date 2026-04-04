"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Check, ChevronsUpDown, Cpu, Palette, Upload, Image as ImageIcon, Save, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { z } from "zod";
import { Submit } from "@/app/admin/karya/tambah/services/form";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PublicationStatus } from "@/lib/generated/prisma/enums";
import { cn } from "@/lib/shadcn";
import { CreationsSchema } from "@/validators/creations.schema";
import Image from "next/image";

export default function FormulirTambahKarya({ students }: { students: { id: number; name: string }[] }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.input<typeof CreationsSchema>, unknown, z.output<typeof CreationsSchema>>({
    resolver: zodResolver(CreationsSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      featured: false,
      publication_status: PublicationStatus.SCHEDULED,
      demo_link: "",
      code_link: "",
      publish_date: undefined,
      studentIds: [],
      technologies: [],
      image: undefined,
    },
  });

  const onSubmit = async (values: z.output<typeof CreationsSchema>) => {
    setIsLoading(true);
    try {
      await Submit(values);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  Gambar (Thumbnail) <span className="text-red-500">*</span>
                </FormLabel>
                <figure className="flex items-center gap-4">
                  <fieldset className="relative h-24 w-40 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    {preview ? (
                      <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <i className="flex h-full items-center justify-center text-gray-400">
                        <ImageIcon size={24} />
                      </i>
                    )}
                  </fieldset>
                  <FormControl>
                    <fieldset className="flex flex-col gap-2">
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="creation-image"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            setPreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                      <label htmlFor="creation-image" className="bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-xs font-medium text-white transition-all hover:opacity-90">
                        <Upload size={14} /> Pilih Gambar
                      </label>
                      <FormMessage />
                    </fieldset>
                  </FormControl>
                </figure>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul Karya *</FormLabel>
              <FormControl>
                <div className="relative">
                  <Palette className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" placeholder="Masukkan judul karya" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publish_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Publikasi</FormLabel>
              <FormControl>
                <div className="relative">
                  <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    className="pl-10"
                    type="date"
                    value={field.value instanceof Date ? field.value.toISOString().split("T")[0] : ""}
                    onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi Karya *</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" placeholder="Masukkan deskripsi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="studentIds"
          render={({ field }) => (
            <FormItem className="flex flex-col pt-1">
              <FormLabel>Mahasiswa *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn("w-full justify-between font-normal hover:bg-white bg-white h-10", !(field.value?.length ?? 0) && "text-muted-foreground")}
                    >
                      {(field.value?.length ?? 0) > 0 ? `${field.value?.length ?? 0} mahasiswa terpilih` : "Pilih Mahasiswa"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Cari nama mahasiswa..." />
                    <CommandList>
                      <CommandEmpty>Mahasiswa tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        {students.map((student) => (
                          <CommandItem
                            value={student.name}
                            key={student.id}
                            onSelect={() => field.onChange(field.value?.includes(student.id) ? field.value.filter((id) => id !== student.id) : [...(field.value || []), student.id])}
                          >
                            <Check className={cn("mr-2 h-4 w-4", field.value?.includes(student.id) ? "opacity-100" : "opacity-0")} />
                            {student.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teknologi *</FormLabel>
              <FormControl>
                <div className="relative mt-0.5">
                  <Cpu className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="Cth: React, Next.js, Prisma"
                    value={field.value?.join(", ") || ""}
                    onChange={(e) => field.onChange(e.target.value.split(",").map((v) => v.trim()).filter(Boolean))}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kategori *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="GAME_DEVELOPMENT">Game Development</SelectItem>
                  <SelectItem value="UI_UX">UI/UX Design</SelectItem>
                  <SelectItem value="AR_VR">AR/VR</SelectItem>
                  <SelectItem value="ANIMATION">Animasi</SelectItem>
                  <SelectItem value="MULTIMEDIA">Multimedia</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publication_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="SCHEDULED">Dijadwalkan</SelectItem>
                  <SelectItem value="ONGOING">Sedang Berlangsung</SelectItem>
                  <SelectItem value="PUBLISHED">Sudah Terbit</SelectItem>
                  <SelectItem value="ARCHIVED">Diarsipkan</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="demo_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tautan Demo</FormLabel>
              <FormControl>
                <div className="relative">
                  <GiConsoleController className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" placeholder="https://..." {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tautan Repositori</FormLabel>
              <FormControl>
                <div className="relative">
                  <FaGithub className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" placeholder="https://github.com/..." {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end border-t border-gray-50 pt-6 md:col-span-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary flex items-center gap-2 px-6 py-4 text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
          >
            {isLoading ? (
              "Menyimpan..."
            ) : (
              <>
                <Save size={16} /> Simpan Karya
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}