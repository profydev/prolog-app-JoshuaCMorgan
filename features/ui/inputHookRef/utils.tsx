export const validations: { name: object; email: object } = {
  name: {
    required: { value: true, message: "An Name is required." },
    minLength: {
      value: 2,
      message: "Name must contain at least two characters",
    },
  },
  email: {
    required: { value: true, message: "An Email is required." },
    pattern: {
      value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
      message: "A valid email is required",
    },
  },
};
