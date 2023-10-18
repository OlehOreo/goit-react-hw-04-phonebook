import styled from 'styled-components';

export const Search = styled.input`
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

  margin-bottom: 20px;

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
