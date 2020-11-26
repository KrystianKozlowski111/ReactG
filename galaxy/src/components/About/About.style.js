import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const AboutTextContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 474px;
  padding-left: 126px;
  ${Media.md`
  padding-left: 10px;
  padding-right:10px;

`}

  ${Media.sm`
  max-width:100%;
  padding-left:10px;
  padding-right:10px;
  margin:0;
`}
`;
export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1110px;
  ${Media.md`
  flex-direction:column;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
  margin:0;
`}
`;
export const AboutHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 10px;
  margin: 0 auto;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -1px;
  text-align: left;
`;

export const Placeholder = styled.div`
  position: relative;
  ${Media.sm`
  max-width:100%;
  padding-left:10px;
  padding-right:10px;
  overflow: hidden;
`}
`;
export const UserContainer = styled.section`
  margin-top: 51px;
  display: flex;
  justify-content: flex-start;
  max-width: 290px;
`;
export const User = styled.div`
  position: relative;
`;
export const UserTextContainer = styled.section`
  display: flex;
  padding-left: 31px;
  justify-content: flex-start;
  flex-direction: column;
`;
