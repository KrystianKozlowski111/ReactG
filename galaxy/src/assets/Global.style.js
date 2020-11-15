import { createGlobalStyle } from 'styled-components';
import { Media } from './Mixins.style';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html{
    ${Media.xxlg`
      font-size: 56.2%;
    `}

    ${Media.lg`
      font-size: 54.2%;
    `}

    ${Media.md`
      font-size: 71.2%;
    `}

    ${Media.sm`
      font-size: 54.2%;
    `}
  }
  body {

    margin: 0;
    padding: 0;
    overscroll-behavior-y: contain;
    background-color: #e0e0e0;
  }
`;
export const HeaderC = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;
  margin: auto;

  justify-content: space-between;
`;
export const WorkHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #222222;
  opacity: 0.7;
`;
export const Header = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 0px;
  letter-spacing: -1px;
  margin-top: 38px;
  color: #222222;
`;
export const UserHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  margin: 0;
  line-height: 32px;
  color: #222222;
`;
export const UserText = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
