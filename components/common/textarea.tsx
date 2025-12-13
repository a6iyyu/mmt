import type { TextArea as ITextArea } from "@/types/components";
import { forwardRef } from "react";

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ label, name, onChange, placeholder, required, value, maxLength = 2000 }, ref) => {

    return (
      <fieldset className="flex w-full flex-col justify-between">
        <span className="mt-1 mb-3 flex items-center justify-between">
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <h6 className="text-xs text-gray-500">
            {typeof value === "string" ? value.length : 0} / {maxLength}
          </h6>
        </span>
        <textarea
          ref={ref}
          id={name}
          name={name}
          rows={4}
          maxLength={maxLength}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="box-border w-full resize-none rounded-[0.7rem] border-[1.5px] border-[#d1d5db] bg-white px-4 py-4 text-sm text-[#222] shadow-[0_1px_4px_rgba(60,60,60,0.04)] transition-all duration-200 outline-none placeholder:text-[#b0b8c1] placeholder:opacity-100 focus:border-[#22b6d1] focus:shadow-[0_2px_8px_0_#22b6d122]"
        />
      </fieldset>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;