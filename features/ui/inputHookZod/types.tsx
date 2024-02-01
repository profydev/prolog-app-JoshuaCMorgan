import { string, z } from "zod";

export const userSchema = z.object({
  name: string().min(1),
  email: string().email(),
});

export type TUserSchema = z.infer<typeof userSchema>;

export type FormFieldProps = {
  label?: string;
  name: ValidFieldNames;
  type?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
  placeholder?: string;
  validation?: object;
};

export type ValidFieldNames = "name" | "email";
