import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';

export const TextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 600px;
  margin-top: -40px;
  ${Media.md`
  margin-bottom:15px;
  
`}
  @media (max-width: 1110px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HeadContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1110px;
  margin-top: 40px;
  @media (max-width: 1110px) {
    padding-left: 0;
  }
  ${Media.md`
  flex-direction:column;
  align-items:center;
  
`}
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 60px;
  max-width: 409px;
`;
export const MainContainer = styled.section``;
export const SocialMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 21px;
  flex-wrap: wrap;
`;
export const Link = styled.a`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  border: none;
  color: #222222;
  opacity: 0.5;
  text-decoration: none;
`;
export const ImageContainer = styled.div`
  max-height: 500px;
  max-width: 825px;
  position: relative;
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
export const Buttoncontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 125px;
  justify-content: space-between;
  margin-top: 12px;
`;
export const CarouselContainer = styled.div`
  position: relative;
  @media (max-width: 1110px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const App1Container = styled.section`
  display: flex;

  justify-content: flex-start;
  flex-direction: column;

  max-width: 100%;
  padding-left: calc((100% - 1110px) / 2);
  @media (max-width: 1110px) {
    padding-left: 0;
  }
  padding-bottom: 200px;
  ${Media.sm`
  padding-right:10px;
  padding-left:10px;
  `}
`;
export const ButtonL = styled.button`
  background: none;
  border: none;
  outline: 0;
  padding: 0;
`;
export const ButtonR = styled.button`
  background: none;
  border: none;
  outline: 0;

  position: absolute;

  left: 65px;
  &::before {
    content: '';
  }
`;
