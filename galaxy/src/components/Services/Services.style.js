import styled from 'styled-components';
export const TextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 600px;
  margin-top: -40px;
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
  height: 500px;
  width: 825px;
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
export const CarouselContainer = styled.div`
  position: relative;
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
`;
export const ButtonL = styled.button`
  background: none;
  border: none;
  outline: 0;
  padding: 0;
  position: absolute;
  left: 0%;
  bottom: -100px;
`;
export const ButtonR = styled.button`
  background: none;
  border: none;
  outline: 0;
  padding: 0;
  position: absolute;
  left: 75px;
  bottom: -100px;
`;
