import styled from 'styled-components';
export const Header = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;

  letter-spacing: -1px;

  color: #222222;
`;
export const Text = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
export const TextContainer = styled.section`
  display: flex;

  justify-content: flex-end;
  flex-direction: column;
  max-width: 475px;
`;
