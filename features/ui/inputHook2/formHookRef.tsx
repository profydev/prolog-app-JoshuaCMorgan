import styles from "./formHookRef.module.scss";
import { InputHookRef } from "./inputHookRef";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

type TUserSchema = z.infer<typeof userSchema>;

const handleFormSubmit = (data: TUserSchema) => {
  console.log({ data });
};

export function UserFormHookRef() {
  const { register, formState, handleSubmit } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });

  const { errors } = formState;

  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.formGroup}
    >
      <InputHookRef
        {...register("name")}
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHookRef>
      <InputHookRef
        {...register("email")}
        errorMessage={errors.email ? errors.email.message : ""}
        hasError={Boolean(errors.email)}
        type="email"
        label="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHookRef>
      <button type="submit">Submit</button>
    </form>
  );
}
