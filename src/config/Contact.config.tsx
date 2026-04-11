import { Contact } from "@/types/config";

export const contactConfig: Contact = {
  title: "Contact Me",
  description: "Don't worry i will find you",
  form: {
    label: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Messae",
    },
    placeholder: {
      name: "Enter You'r name (don't be shy) ",
      email: "Your email",
      phone: "your Phone",
      message: "Any thing you wanna say",
    },
    submitButton: "Submit",
    successMessage: "i don t know who you are, but i will find",
    errorMessage: "oops,something went wrong. can you try latter???",
  },
};
