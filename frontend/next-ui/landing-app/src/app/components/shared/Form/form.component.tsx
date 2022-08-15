import React, { useState } from "react";
import { Formik } from "formik";
import * as Styled from "./form.styles";
import Input from "../Input/input.commponent";
import Textarea from "../Textarea/textarea.component";
import Button from "../Button/button.component";
import { registrationFormSchema } from "../../../../helpers/validation";
import { sendFormEA } from "../../../../services/event";
import emailjs from "emailjs-com";

const Form = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <Formik
      validationSchema={registrationFormSchema}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={async (values) => {
        sendFormEA(values);

        await emailjs.send(
          "code_generation_sales",
          "template_63y7U3ol",
          values,
          "user_qBEngbKseuGY8AfrTEa7E"
        );

        setSubmitted(true);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <Styled.FormWrapper>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errors={errors}
              touched={touched}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errors={errors}
              touched={touched}
            />
            <Textarea
              placeholder="Enter your message..."
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              errors={errors}
              touched={touched}
            />
            <Button
              type="submit"
              disabled={
                isEmptyObject(touched) || !isEmptyObject(errors) || isSubmitting
              }
              onClick={handleSubmit}
            >
              Send
            </Button>
            <Styled.SuccessMessageContainer>
              {isSubmitted && (
                <p className="success-message">
                  Your message has been successfully delivered. Our Sales team
                  will contact with you.
                </p>
              )}
            </Styled.SuccessMessageContainer>
          </Styled.FormWrapper>
        );
      }}
    </Formik>
  );
};
export default Form;
