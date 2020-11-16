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
export const PictureContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 135px;
  max-width: 1110px;
`;
export const PlayButton = styled.button`
  position: absolute;
  border: 0px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
export const Picture = styled.div`
  position: relative;
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
export const Text = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  padding-top: 20px;
  font-weight: normal;
  margin: 0 auto;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
export const AppContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1170px;
  padding-right: 5%;
  padding-left: calc((100% - 1110px) / 2);
  @media (max-width: 1110px) {
    padding-left: 0;
  }
  padding-bottom: 140px;
`;
