"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IdCard, Mail, Save, Upload, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { z } from "zod";
import { Submit } from "@/app/admin/dosen/tambah/services/form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LecturerSchema } from "@/validators/lecturer.schema";
import Image from "next/image";

export default function FormulirTambahDosen() {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.input<typeof LecturerSchema>>({
    resolver: zodResolver(LecturerSchema),
    defaultValues: {
      nama_lengkap: "",
      nip: undefined,
      keahlian: "",
      jabatan: "",
      bio: "",
      linkedin: "",
      surel: "",
      sinta: "",
      scholar: "",
      whatsapp: "",
      foto_profil: undefined,
    },
    mode: "onChange",
  });

  return (
    <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (data) => await Submit(data as unknown as z.output<typeof LecturerSchema>) as unknown as SubmitHandler<z.input<typeof LecturerSchema>>)}
          className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="foto_profil"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">
                    Foto Dosen <span className="text-red-500">*</span>
                  </FormLabel>
                  <div className="flex items-center gap-4">
                    <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                      {preview ? (
                        <Image src={preview} alt="Preview" width={100} height={100} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-400">
                          <ImageIcon size={24} />
                        </div>
                      )}
                    </span>
                    <div className="flex flex-col gap-2">
                      <Input
                        {...fieldProps}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="foto_profil"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          file instanceof File ? (setPreview(URL.createObjectURL(file)), onChange(file)) : (setPreview(null), onChange(undefined));
                        }}
                      />
                      <label htmlFor="foto_profil" className="bg-primary hover:bg-hover-blue flex w-fit cursor-pointer items-center gap-3 rounded-md px-5 py-3.5 text-xs font-medium text-white transition-colors">
                        <Upload size={16} /> Pilih Gambar
                      </label>
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="nama_lengkap"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  Nama Lengkap <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="relative">
                  <PiChalkboardTeacher className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Masukkan nama lengkap" className="pl-10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  NIP <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="relative">
                  <IdCard className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="Masukkan NIP"
                    className="pl-10"
                    {...field}
                    value={field.value ? String(field.value) : ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keahlian"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  Keahlian <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Keahlian" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Game Development">Game Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="AR/VR">AR/VR</SelectItem>
                    <SelectItem value="Animasi">Animasi</SelectItem>
                    <SelectItem value="Multimedia">Multimedia</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jabatan"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  Jabatan <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Jabatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Asisten Ahli">Asisten Ahli</SelectItem>
                    <SelectItem value="Lektor">Lektor</SelectItem>
                    <SelectItem value="Lektor Kepala">Lektor Kepala</SelectItem>
                    <SelectItem value="Guru Besar">Guru Besar</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <span className="flex justify-between">
                    <FormLabel className="text-primary font-medium">
                      Bio
                    </FormLabel>
                    <h5 className="text-xs text-gray-500">
                      {field.value?.length || 0} / 2000
                    </h5>
                  </span>
                  <FormControl>
                    <Textarea placeholder="Masukkan bio singkat" className="resize-none" maxLength={2000} rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  LinkedIn
                </FormLabel>
                <FormControl className="relative">
                  <FaLinkedin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Cth. labmmt" className="pl-10" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Tanpa &quot;https://www.linkedin.com/in/&quot;
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  Surel <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="relative">
                  <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input type="email" placeholder="Cth. labmmt@gmail.com" className="pl-10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sinta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  SINTA
                </FormLabel>
                <FormControl className="relative">
                  <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Cth. labmmt" className="pl-10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">
                  WhatsApp
                </FormLabel>
                <FormControl className="relative">
                  <FaWhatsapp className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input type="number" placeholder="Cth. 6281..." className="pl-10" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Gunakan format internasional (62...)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end border-t border-gray-50 pt-6 md:col-span-2">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="bg-primary hover:bg-hover-blue flex items-center gap-3 shadow-lg shadow-blue-500/20"
            >
              {form.formState.isSubmitting ? (
                "Menyimpan..."
              ) : (
                <>
                  <Save className="h-4 w-4" /> Simpan Data
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}