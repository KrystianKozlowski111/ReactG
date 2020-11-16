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
