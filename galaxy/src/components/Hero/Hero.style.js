import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const WorkTextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1110px;
  padding-right: 5%;

  @media (max-width: 1110px) {
    padding-left: 10px;
  }
`;
export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  position: relative;

  ${Media.md`
  flex-direction:column;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
`}
`;
export const WorkHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`;
export const WorkText = styled.p`
  margin-top: -22px;
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
export const Placeholder = styled.div`
  position: relative;
  max-width: 50%;
  ${Media.md`
  max-width: 100%;
 
  margin-left:10px;
  margin-right:10px;
  overflow:hidden;  
`}
`;
export const Button = styled.button`
  display: inline-block;
  padding: 13px;
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ffffff;
  background: #4737ff;
  outline: 0;
  margin-top: 56px;
  max-width: 189px;
  max-height: 50px;
  border: 0px;
  ${Media.md`
  margin-bottom:15px;
  
`}
`;
export const VideoContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 50%;
  left: 40%;

  filter: drop-shadow(-20px 60px 220px rgba(0, 0, 0, 0.44));
  ${Media.md`
  top: 50%;
  left: 50%;
  transform:translateX(-50%) translateY(50%);
  overflow: hidden;
  max-width:90%;
`}
`;
