import styles from "./inputHookZod.module.scss";
import { userSchema, TUserSchema } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputHookZod } from "./inputHookZod";

const onSubmit = (data: TUserSchema) => {
  console.log("SUCCESS", { data });
};

export function FormHookZod() {
  const { register, formState, handleSubmit } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });

  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formGroup}
      noValidate
    >
      <InputHookZod
        {...register("name")}
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHookZod>

      <InputHookZod
        {...register("email")}
        errorMessage={errors.email ? errors.email.message : ""}
        hasError={Boolean(errors.email)}
        type="email"
        label="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHookZod>

      <button type="submit">Submit</button>
    </form>
  );
}
