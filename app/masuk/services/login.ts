import axios, { type AxiosError } from "axios";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { User } from "@/app/masuk/types/user";
import { LOGIN } from "@/constants/route";
import { Form } from "@/utils/form";

class Login extends Form {
  constructor() {
    super();
  }

  public static async submit(e: FormEvent<HTMLFormElement>, form: Pick<User, "surel" | "kata_sandi">, loading: Dispatch<SetStateAction<boolean>>) {
    e.preventDefault();
    loading(true);

    const errors = this.validate(form);
    if (Object.keys(errors).length > 0) {
      loading(false);
      return errors;
    }

    try {
      const response = (await axios.post<User>(LOGIN, form)).data;
      loading(false);
      return response;
    } catch (error: unknown) {
      if ((error as AxiosError).response?.status === 401) {
        console.warn(process.env.NODE_ENV === "development" && error);
      } else {
        console.error(process.env.NODE_ENV === "development" && error);
      }
    }
  }

  public static validate(form: Pick<User, "surel" | "kata_sandi">) {
    const errors: Partial<Record<keyof typeof form, string>> = {};

    if (!form.surel) {
      errors.surel = "Surel wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(form.surel)) {
      errors.surel = "Format surel tidak valid.";
    }

    if (!form.kata_sandi) {
      errors.kata_sandi = "Kata sandi wajib diisi.";
    } else if (form.kata_sandi.length < 8) {
      errors.kata_sandi = "Kata sandi minimal 8 karakter.";
    }

    return errors;
  }
}

export const Submit = Login.submit;
export const Validate = Login.validate;
export { Login };