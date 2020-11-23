import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const WorksContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1110px;
`;

export const Headercontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;
  margin: auto;
  margin-bottom: 108px;
  justify-content: space-between;
  ${Media.md`
  flex-direction:column;
  align-items:center;
`}
  ${Media.sm`
  overflow:hidden;
padding-left:10px;


`}
`;
export const Switcher = styled.section`
  display: flex;
  align-items: center;
  max-width: 470px;
  ${Media.sm`
  
  max-width:100%;
  flex-wrap:wrap;
  `}
  justify-content: space-between;
`;
export const SwitcherText = styled.button`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  outline: 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #222222;
  opacity: 0.3;
  background: none;
  border: none;
`;

export const DiscoverHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -1px;
  color: #222222;
`;
export const PictureContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1110px;
  ${Media.sm`
  
  padding-left:10px;
  padding-right:10px;
  
  `}
`;
export const Picture = styled.div`
  position: relative;
`;

export const Footercontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;
  margin: auto;
  justify-content: space-between;
  padding-bottom: 248px;
  ${Media.md`
  flex-direction:column;
  align-items:center;
`}
  ${Media.sm`
  
padding-left:10px;
padding-right:10px;


`}
`;
export const FooterText = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  max-width: 730px;
  opacity: 0.7;
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
  max-width: 222px;
  max-height: 50px;
  border: 0px;
`;
