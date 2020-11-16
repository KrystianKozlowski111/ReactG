import styled from 'styled-components';
export const TextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 350px;
`;

export const HeadContainer = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1110px;

  @media (max-width: 1110px) {
    padding-left: 0;
  }
`;
export const SocialMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const Link = styled.a`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 200;
  line-height: 28px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
export const WallP = styled.div`
  padding-top: 86px;
  padding-bottom: 23px;
  position: relative;
`;
export const Buttoncontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;

  justify-content: space-between;
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
  background: #ef8e70;
  outline: 0;
  max-width: 222px;
  max-height: 50px;
  border: 0px;
`;
export const BottomTextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 540px;
`;
export const AwardsContainer = styled.section`
  display: flex;
  padding: 67px 0px;
  justify-content: space-between;
  margin-top: 158px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
export const AwardsPicture = styled.div``;

export const AwardsText = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  margin-top: 0;
`;
export const AwardsHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0px;
  letter-spacing: 4px;
  line-height: 24px;
  text-transform: uppercase;
`;
export const AwardsData = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  margin-top: 0;
  text-align: right;
`;
export const BoxContainer = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: column;
  gap: 55px;
`;
export const BoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 35%;
`;
export const BoxItem = styled.div`
  display: flex;
  align-items: flex-start;

  justify-content: space-between;
`;
