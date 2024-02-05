import { string, z } from "zod";

export const userSchema = z.object({
  name: string().min(1),
  email: string().email(),
});

export type TUserSchema = z.infer<typeof userSchema>;

export type InputProps = {
  labelText?: string;
  name: ValidFieldNames;
  id: ValidFieldNames;
  type?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ValidFieldNames = "name" | "email";
