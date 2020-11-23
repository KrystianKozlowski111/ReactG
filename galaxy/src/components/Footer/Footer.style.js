import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const Footercontainer = styled.section`
  display: flex;
  align-items: base-line;
  margin: auto;
  max-width: 1170px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  padding: 59px 0px 41px 0px;
  ${Media.md`
  flex-direction:column;
  align-items:center;
  flex-wrap: wrap;
  `}
`;
export const MainContainer = styled.section`
  display: block;
  width: 100%;
  background: #515151;
  ${Media.md`
  width:100%;
  `}
`;
export const BottomContainer = styled.section`
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 1170px;
  justify-content: space-between;
  padding: 35px 0px;
  ${Media.md`
  flex-direction:column;
  align-items:center;
  flex-wrap: wrap;
  `}
`;
export const Image = styled.div`
  object-fit: contain;
  margin: auto 0;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 59px;
  ${Media.md`
  padding-bottom:10px;
  padding-top:10px;
  `}
  ${Media.sm`
  gap:10px;
  flex-wrap:wrap;
  padding:5px 10px;
  `}
`;
export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 43px;
  ${Media.md`
  padding-bottom:10px;
  
  `}
  ${Media.sm`
  gap:10px;
  flex-wrap:wrap;
  padding:5px 10px;
  `}
`;
export const SocialMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const Menutext = styled.a`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 200;
  line-height: 28px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
export const FooterText = styled.a`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 200;
  line-height: 28px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  opacity: 0.4;
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  ${Media.md`
  flex-direction:column;
  align-items:center;
  gap:10px;
  `}
`;
export const Inputf = styled.input`
  padding: 10px;
  font-size: 18px;
  font-family: Fira Sans, sans-serif;
  display: inline-block;
  line-height: 28px;
  margin-right: 15px;
  &::placeholder {
    color: #222222;
    line-height: 28px;
    opacity: 0.5;
  }
`;
export const Button = styled.button`
  display: inline-block;
  padding: 13px;
  font-family: Fira Sans, sans-serif;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  background-color: #c6b393;
  outline: 0;

  border: 1px solid #000000;
`;
