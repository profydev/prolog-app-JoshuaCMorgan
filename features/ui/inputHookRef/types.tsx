// import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  name: string;
  firstName: string;
};

export type FormFieldProps = {
  label?: string;
  // register: UseFormRegister<FormData>;
  // name: ValidFieldNames;
  // error: FieldError | undefined;
  type?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
  placeholder?: string;
  validation?: object;
};

export type ValidFieldNames = "name" | "email";
