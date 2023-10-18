import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  BtnAddContact,
  ErrMessage,
  StyledForm,
  StyledField,
  FieldName,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .lowercase()
    .min(3, 'Too short!')
    .required('This field is required!'),
  number: Yup.string()
    .transform((value, originalValue) => {
      return value.replace(/\D/g, '');
    })

    .min(12, 'This field must be filled')
    .required('This field is required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handlerSubmit = (values, actions) => {
    onSubmit(values, actions);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handlerSubmit}
    >
      <StyledForm>
        <label>
          <FieldName>Name</FieldName>
          <StyledField id="name" name="name" placeholder="Rosie Simpson" />
          <ErrMessage name="name" component="div" />
        </label>
        <label>
          <FieldName>Number</FieldName>
          <StyledField
            name="number"
            type="tel"
            placeholder="+38 (099) 999-99-99"
          />
          <ErrMessage name="number" component="div" />
        </label>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </StyledForm>
    </Formik>
  );
};
