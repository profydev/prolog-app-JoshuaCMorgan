import styles from "./form.module.scss";
import { useState } from "react";
import { Input } from "./input";
import validator from "validator";

interface errors {
  name: string;
  email: string;
}

function onSave(value: object) {
  console.log({ value });
}

const user: { name: string; email: string } = {
  name: "",
  email: "",
};

export function UserForm() {
  const [userData, setUserData] = useState(user);
  console.log({ userData });

  const [error, setErrors] = useState({} as errors);

  const { name, email } = userData;
  // const hasError = Boolean(Object.keys(error).length);

  function validateData() {
    // Use a type assertion to initialize a typed empty object in TypeScript.
    const errors = {} as errors;

    if (!name) {
      errors.name = "Name is required";
    }

    if (!validator.isEmail(email)) {
      errors.email = "A valid email is required";
    }
    return errors;
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateData();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    setErrors({} as errors);
    onSave(userData);
  }

  function updateForm(key: string) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      setUserData((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };
  }
  return (
    <form onSubmit={handleSave} className={styles.formGroup}>
      <Input
        type="text"
        name="name"
        labelText="name"
        value={userData.name}
        hasError={Boolean(error.name)}
        errorMessage={error.name ?? ""}
        hint="Maximum 100 Characters"
        onChange={updateForm("name")}
        iconSrc={"/icons/mail.svg"}
      ></Input>
      <Input
        type="text"
        name="email"
        labelText="email"
        value={userData.email}
        hasError={Boolean(error.email)}
        errorMessage={error.email ?? ""}
        hint="Maximum 100 Characters"
        onChange={updateForm("email")}
        iconSrc={"/icons/mail.svg"}
      ></Input>
      <button type="submit">click</button>
    </form>
  );
}
