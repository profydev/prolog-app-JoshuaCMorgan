import styles from "./formHookZod.module.scss";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

const userSchema = z.object({
  // name: string().min(1),
  // email: string().email(),
  firstName: string().min(3),
});

// interface IFormValues {
//   // name: string;
//   // email: string;
//   firstName: string;
// }

// const handleFormSubmit: SubmitHandler<IFormValues> = (data) => {
//   console.log({ data });
// };

type TUserSchema = z.infer<typeof userSchema>;

const handleFormSubmit = (data: TUserSchema) => {
  console.log({ data });
};
export function UserFormHookZod() {
  const { register, formState, handleSubmit } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });

  // const { register, formState, handleSubmit } = useForm<IFormValues>();

  const { errors } = formState;

  console.log({ errors });

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.formGroup}
    >
      <input type="text" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      {/* <InputHook
        register={register}
        registerKey="name"
        errorMessage={errors.name ? errors.name.message : ""}
        hasError={Boolean(errors.name)}
        type="text"
        label="name"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="enter name"
      ></InputHook> */}
      {/* <InputHook
        register={register}
        registerKey="email"
        errorMessage={errors.email ? errors.email.message : ""}
        hasError={Boolean(errors.email)}
        type="email"
        label="email"
        hint="Maximum 100 Characters"
        iconSrc={"/icons/mail.svg"}
        placeholder="jmorg0605@gmail.com"
      ></InputHook> */}

      <button type="submit">Submit</button>
    </form>
  );
}
