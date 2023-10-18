import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: ${prop => prop.theme.spacing(5)};
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0.09em;

  margin-left: 140px;
  margin-bottom: 30px;
  color: #babffff5;
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0.09em;

  margin-left: 165px;
  margin-bottom: 30px;
  color: #babffff5;
`;
