import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
     
    background-color: #47506e;
    padding: 10px;
    border: 1px solid transparent;

    border-radius: 10px;

   box-shadow: 0px 4px 9px 7px rgb(56 59 83);
}
`;

export const ContactInfo = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;

  min-width: 380px;
  color: ${p => p.theme.colors.white};
`;

export const Phone = styled.span`
  margin-left: 7px;
`;

export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  font-size: 18px;
  letter-spacing: 0.0275rem;

  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgBtn};

  border: none;
  border-radius: 15px;

  width: 80px;
  height: 40px;

  margin-left: auto;

  &:hover {
    background-color: #2468ca;
    color: #ff6060;
  }

  &:active {
    transform: translateY(4px);
    background-color: #ff6060;
    color:${p => p.theme.colors.white}
`;
