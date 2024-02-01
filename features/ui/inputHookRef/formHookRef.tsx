import styles from "./inputHookRef.module.scss";
import { FormData } from "./types";
import { InputHookRef } from "./inputHookRef";
import { useForm } from "react-hook-form";
import { validations } from "./utils";

export function FormHookRef() {
  const { register, formState, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <InputHookRef
        {...register("name", validations.name)}
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHookRef>

      <InputHookRef
        {...register("email", validations.email)}
        errorMessage={errors.email ? errors.email.message : ""}
        hasError={Boolean(errors.email)}
        type="email"
        label="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHookRef>

      <input type="submit"></input>
    </form>
  );
}
