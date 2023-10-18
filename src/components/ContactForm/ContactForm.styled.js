import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${prop => prop.theme.spacing(5)};
`;

// Input
export const FieldName = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: 0.15em;
  font-weight: bold;
  color: ${p => p.theme.colors.white};
`;
export const StyledField = styled(Field)`
  display: block;

  width: 480px;
  height: 60px;

  border: 2px solid rgba(17, 17, 17, 0.05);
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${p => p.theme.colors.inputField};
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.35),
    0 2px 0 rgba(255, 255, 255, 0.15);
  outline: none;
  transition: border 300ms;

  font-weight: 400;
  font-size: 25px;

  line-height: 1.16;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.white};

  &:focus {
    border: 2px solid #b8baf7;
  }

  &::placeholder {
    font-size: 25px;
    line-height: 1.21;
    letter-spacing: -0.02em;
    color: #ffffff99;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.err};

  margin-top: 8px;
  font-size: 20px;
  line-height: 1.21;
  letter-spacing: 0.09em;
`;
export const BtnAddContact = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  letter-spacing: 0.0275rem;

  width: 200px;

  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgBtn};
  border: none;
  border-radius: 15px;

  margin-left: 140px;
  margin-top: 20px;
  margin-bottom: 40px;

  &:hover {
    background-color: #2468ca;
  }

  &:active {
    transform: translateY(4px);
    background-color: #3e8e41;
  }
`;
