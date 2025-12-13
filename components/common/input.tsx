"use client";

import { useState, useRef, ChangeEvent, WheelEvent } from "react";
import { Input as I } from "@/types/components";
import { Eye, EyeOff, Upload, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Input({ icon, label, name, onChange, placeholder, required, type, info = null, value = undefined }: I) {
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (type === "number") newValue = newValue.replace(/[^0-9.,]/g, "").replace(/(,.*?),/g, "$1");
    else if (type === "text") newValue = newValue.replace(/[^a-zA-Z0-9\s.,?!:;'"\-()\/]/g, "");

    e.target.value = newValue;
    onChange?.(e);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onChange?.(e);
    }
  };

  const handleWheel = (e: WheelEvent<HTMLInputElement>) => {
    if (type === "number") e.currentTarget.blur();
  };

  return (
    <fieldset className={`flex w-full flex-col justify-between ${!info ? "space-y-4" : ""}`}>
      <label htmlFor={name} className="text-primary text-sm font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {info && (
        <h6 className="mt-1 mb-3 cursor-default text-xs text-red-500">
          {info}
        </h6>
      )}
      {type === "file" ? (
        <div className="flex items-center gap-4">
          <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            {preview ? (
              <Image height={1920} width={1080} src={preview} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <i className="flex h-full w-full items-center justify-center text-gray-400">
                <ImageIcon size={24} />
              </i>
            )}
          </span>
          <span className="flex flex-col gap-2">
            <input
              ref={fileInputRef}
              id={name}
              name={name}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required={required}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-primary hover:bg-hover-blue flex w-fit cursor-pointer items-center gap-3 rounded-md px-5 py-3.5 text-xs font-medium text-white transition-colors"
            >
              <Upload size={16} />
              Pilih Gambar
            </button>
            <p className="mt-0.5 cursor-default text-xs text-gray-500">
              Maksimal 2MB (JPG, PNG)
            </p>
          </span>
        </div>
      ) : (
        <div className="relative">
          {icon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-6 text-slate-500/50">
              {icon}
            </span>
          )}
          <input
            id={name}
            name={name}
            type={type === "password" ? showPassword ? "text" : "password" : type || "text"}
            value={value}
            placeholder={placeholder}
            required={required}
            autoComplete="off"
            step={type === "number" ? "any" : undefined}
            onChange={handleInput}
            onWheel={handleWheel}
            className={`box-border w-full rounded-[0.7rem] border-[1.5px] border-[#d1d5db] py-4 text-sm text-[#222] shadow-[0_1px_4px_rgba(60,60,60,0.04)] transition-all duration-200 outline-none placeholder:text-sm placeholder:text-[#b0b8c1] placeholder:opacity-100 focus:border-[#22b6d1] focus:shadow-[0_2px_8px_0_#22b6d122] ${icon ? "pl-14" : "pl-4"} ${type === "password" ? "pr-12" : "pr-4"}`}
          />
          {type === "password" && (
            <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer text-gray-500">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          )}
        </div>
      )}
    </fieldset>
  );
}