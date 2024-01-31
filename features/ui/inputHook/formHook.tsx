import styles from "./formHook.module.scss";
import { InputHook } from "./inputHook";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

const schema = z.object({
  name: string().min(1),
  email: string().email(),
});

interface IFormValues {
  name: string;
  email: string;
}

const handleFormSubmit: SubmitHandler<IFormValues> = (data) => {
  console.log({ data });
};

export function UserFormHook() {
  const { register, formState, handleSubmit } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.formGroup}
    >
      <InputHook
        register={register}
        registerKey="name"
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHook>
      <InputHook
        register={register}
        registerKey="email"
        errorMessage={errors.email ? errors.email.message : ""}
        hasError={Boolean(errors.email)}
        type="email"
        label="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHook>

      <button type="submit">Submit</button>
    </form>
  );
}
