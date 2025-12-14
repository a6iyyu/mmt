"use client";

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Select as ISelect } from "@/types/components";
import { filteredOptions, handleClickOutside, label as SelectLabel, value as SelectValue } from "@/utils/select";
import { Text } from "@/utils/text";

export default function Select({ label, name, onChange, options, required, value, info }: ISelect) {
  const wrapper = useRef<HTMLFieldSetElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value?.toString());

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => handleClickOutside(e, wrapper, setDropdownOpen));
    return () => document.removeEventListener("click", (e: MouseEvent) => handleClickOutside(e, wrapper, setDropdownOpen));
  }, []);

  useEffect(() => setSelectedValue(value?.toString()), [value]);

  return (
    <fieldset className={`flex w-full flex-col justify-between ${!info ? "space-y-4" : ""}`} ref={wrapper}>
      <span>
        <label htmlFor={name} className="text-primary text-sm font-medium">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        {info && (
          <p className="mt-1 mb-3 cursor-default text-xs text-gray-500">
            {info}
          </p>
        )}
      </span>
      <div className="relative">
        <select
          name={name}
          id={name}
          required={required}
          className="hidden w-full appearance-none rounded-[0.7rem] border-[1.5px] border-[#d1d5db] bg-transparent p-4 focus:ring-0 focus:outline-none"
          value={((value ?? selectedValue)?.toString() ?? "")}
          onChange={(e) => { setSelectedValue(e.target.value); onChange?.(e.target.value) }}
        >
          <option value="" hidden>
            Pilih {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={SelectValue(option)}>
              {SelectLabel(option)}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="flex min-h-10 w-full cursor-pointer items-center justify-between rounded-[0.7rem] border-[1.5px] border-[#d1d5db] bg-transparent p-4 text-left text-[#b0b8c1] focus:border-[#22b6d1] focus:shadow-[0_2px_8px_0_#22b6d122]"
          onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen) }}
        >
          <h5 className="flex w-full items-center justify-between">
            <span className="truncate text-sm">
              {(() => {
                const selectedOption = options.find((option) => SelectValue(option).toString() === ((value ?? selectedValue)?.toString() ?? ""));
                if (selectedOption) return Text.truncate(`${SelectLabel(selectedOption)}`, 20, 40);
                return `Pilih ${label}`;
              })()}
            </span>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
          </h5>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-50 mt-1 max-h-40 w-full overflow-y-auto rounded-[0.7rem] border-[1.5px] border-[#d1d5db] bg-white text-xs">
            <li className="sticky top-0 border-b border-gray-200 bg-white p-2">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full rounded-[0.7rem] border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
                placeholder="Cari..."
              />
              <Search className="absolute top-1/2 right-6 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </li>
            {filteredOptions(options, searchText).map((option, index) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer p-4 hover:bg-gray-100 ${SelectValue(option).toString() === ((value ?? selectedValue)?.toString() ?? "") ? "bg-gray-100" : ""}`}
                  onClick={() => { setDropdownOpen(false); setSelectedValue(SelectValue(option).toString()); onChange?.(SelectValue(option).toString()) }}
                >
                  {SelectLabel(option)}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </fieldset>
  );
}