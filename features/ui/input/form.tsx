import styles from "./input.module.scss";
import { userSchema, TUserSchema } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";

const onSubmit = (data: TUserSchema) => {
  console.log("SUCCESS", { data });
};

export function Form() {
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
      <Input
        {...register("name")}
        id="name"
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        labelText="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></Input>

      <Input
        {...register("email")}
        errorMessage={errors.email ? errors.email.message : ""}
        id="email"
        hasError={Boolean(errors.email)}
        type="email"
        labelText="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></Input>

      <button type="submit">Submit</button>
    </form>
  );
}
