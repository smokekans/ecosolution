import * as Yup from "yup";

const fullNameRegex = /^[а-яА-Яa-zA-Z\s]*$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;

export const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(fullNameRegex, "Only letters can be entered")
    .required("Wrong Full name"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(emailRegex, "Wrong Email")
    .required("Wrong Email"),
  phone: Yup.string()
    .matches(phoneRegex, 'Phone must be in this format: "+380XXXXXXXXX"')
    .required("Wrong phone"),
  message: Yup.string().max(500, "Maximum allowed number of characters - 500"),
});
