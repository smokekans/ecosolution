import { Box, Button } from "@mui/material";
import { ArrowRightIcon } from "../../../image/svg/ArrowRightIcon";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-mui";
import { styles } from "../styles";
import { ContactSchema } from "./ValidationSchema";
import { fields } from "./fields";

const initialValue = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export default function FormContact() {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  return (
    <Box sx={styles.generalBoxForm}>
      <Formik
        initialValues={initialValue}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Box sx={styles.boxForm}>
              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                focused
                id={fields.fullName.id}
                label={fields.fullName.label}
                type={fields.fullName.type}
                name={fields.fullName.name}
                autoComplete="name"
                placeholder={fields.fullName.placeholder}
                helperText={<ErrorMessage name="name" />}
                sx={styles.errMessage}
                inputProps={{ sx: styles.placeholderForm }}
              />

              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                focused
                id={fields.email.id}
                label={fields.email.label}
                type={fields.email.type}
                name={fields.email.name}
                autoComplete="email"
                helperText={<ErrorMessage name={fields.email.name} />}
                placeholder={fields.email.placeholder}
                sx={styles.errMessage}
                inputProps={{ sx: styles.placeholderForm }}
              />
              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                focused
                id={fields.phone.id}
                label={fields.phone.label}
                name={fields.phone.name}
                type={fields.phone.type}
                autoComplete="phone"
                helperText={<ErrorMessage name={fields.phone.name} />}
                placeholder={fields.phone.placeholder}
                sx={styles.errMessage}
                inputProps={{ sx: styles.placeholderForm }}
              />
              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                focused
                id={fields.message.id}
                label={fields.message.label}
                name={fields.message.name}
                type={fields.message.type}
                multiline
                placeholder={fields.message.placeholder}
                rows={6}
                sx={styles.errMessage}
                inputProps={{ sx: styles.placeholderForm }}
              />
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                sx={styles.btnSubmit}
                endIcon={<ArrowRightIcon sx={styles.iconBtnSubmit} />}
              >
                Send
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
