import styles from "./formHook.module.scss";
import { FormData } from "./types";
import { validations } from "./utils";
import { InputHook } from "./inputHook";
import { useForm } from "react-hook-form";

export function FormHook() {
  const { register, formState, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };
  const { errors } = formState;
  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formGroup}
      noValidate
    >
      <InputHook
        register={register}
        error={errors.name}
        validation={validations.name}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        name="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHook>
      {/* validation checks is email has sequence of non-whitespace characters, followed by @ symbol, more non-whitespace characters, a dot, and more non-whitespace */}
      <InputHook
        register={register}
        error={errors.email}
        validation={validations.email}
        hasError={Boolean(errors.email)}
        name="email"
        type="email"
        label="email"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHook>

      <button type="submit">Submit</button>
    </form>
  );
}
