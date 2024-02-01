export type FormData = {
  email: string;
  name: string;
};

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
