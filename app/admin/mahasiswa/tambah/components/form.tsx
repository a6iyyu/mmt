"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IdCard, Image as ImageIcon, Mail, Save, Upload } from "lucide-react";
import { type BaseSyntheticEvent, type SubmitEvent, useState } from "react";
import { FaGithub, FaLinkedin, FaUsersLine, FaWhatsapp } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Submit } from "@/app/admin/mahasiswa/tambah/services/form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StudentsSchema } from "@/validators/students.schema";
import Image from "next/image";

export default function FormulirTambahMahasiswa() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof StudentsSchema>>({
    resolver: zodResolver(StudentsSchema),
    defaultValues: {
      name: "",
      nim: "",
      major: "",
      batch: undefined, 
      status: "ACTIVE",
      github: "",
      linkedin: "",
      email: "",
      whatsapp: "",
      image: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof StudentsSchema>) => {
    setIsLoading(true);
    try {
      await Submit(values);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2"
        encType="multipart/form-data"
      >
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-primary text-sm font-medium">
                  Foto Mahasiswa <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <fieldset className="flex items-center gap-4">
                    <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                      {preview ? (
                        <Image height={100} width={100} src={preview} alt="Preview" className="h-full w-full object-cover" />
                      ) : (
                        <i className="flex h-full w-full items-center justify-center text-gray-400">
                          <ImageIcon size={24} />
                        </i>
                      )}
                    </span>
                    <span className="flex flex-col gap-2">
                      <Input
                        name={field.name}
                        ref={field.ref}
                        onBlur={field.onBlur}
                        disabled={field.disabled}
                        type="file"
                        accept="image/jpeg, image/png"
                        className="hidden"
                        id="image"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const file = event.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            setPreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                      <label htmlFor="image" className="bg-primary hover:bg-hover-blue flex w-fit cursor-pointer items-center gap-3 rounded-md px-5 py-3.5 text-xs font-medium text-white transition-colors">
                        <Upload size={16} /> Pilih Gambar
                      </label>
                      <p className="mt-0.5 cursor-default text-xs text-gray-500">
                        Maksimal 2MB (JPG, PNG)
                      </p>
                    </span>
                  </fieldset>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Nama Lengkap *</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <PiStudentFill className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input type="text" placeholder="Cth. Budi Santoso" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nim"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>NIM *</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <IdCard className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input type="text" placeholder="Cth. 2341720000" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Program Studi <span className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12! w-full">
                    <SelectValue placeholder="Pilih Program Studi" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="TI">D-IV Teknik Informatika</SelectItem>
                  <SelectItem value="SIB">D-IV Sistem Informasi Bisnis</SelectItem>
                  <SelectItem value="PPLS">D-II Pengembangan Piranti Lunak Situs</SelectItem>
                  <SelectItem value="MI">D-III Manajemen Informatika</SelectItem>
                  <SelectItem value="RTI">S2 Rekayasa Teknologi Informasi</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="batch"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Angkatan *</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <FaUsersLine className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Cth. 2023" 
                    className="h-12 pl-12" 
                    // Menghilangkan angka 0 default: jika nilainya undefined/0, tampilkan string kosong
                    value={field.value || ""} 
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const val = e.target.value;
                      // Jika kosong, set ke undefined agar placeholder muncul kembali
                      field.onChange(val === "" ? undefined : Number(val));
                    }} 
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Status <span className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12! w-full">
                    <SelectValue placeholder="Pilih Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ACTIVE">Aktif</SelectItem>
                  <SelectItem value="ON_LEAVE">Cuti</SelectItem>
                  <SelectItem value="GRADUATED">Lulus</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Surel <span className="text-red-500">*</span></FormLabel>
              <div className="relative">
                <span className="absolute top-3/10 left-0 flex items-center pl-5 text-slate-500">
                  <Mail className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input type="email" placeholder="Cth. labmmt@gmail.com" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>GitHub</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <FaGithub className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input placeholder="Cth. labmmt" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>LinkedIn</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <FaLinkedin className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input placeholder="Cth. labmmt" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>WhatsApp</FormLabel>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-500">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <FormControl>
                  <Input type="text" placeholder="Cth. 6281234567890" className="h-12 pl-14" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end border-t border-gray-50 pt-6 md:col-span-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-hover-blue flex cursor-pointer items-center gap-3 rounded-lg px-6! py-6! text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            {isLoading ? "Menyimpan..." : <><Save className="h-4 w-4" /> Simpan Data</>}
          </Button>
        </div>
      </form>
    </Form>
  );
}