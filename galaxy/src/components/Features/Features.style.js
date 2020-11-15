import styled from 'styled-components';
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
export const Text = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  margin-top: 13px;
  color: #222222;
  opacity: 0.7;
`;
export const TextContainer = styled.section`
  display: flex;
  justify-content: flex-start;

  flex-direction: column;
  max-width: 475px;
`;
export const FeatureContainer = styled.section`
  display: flex;
  position: relative;
  align-items: left;
`;
export const RightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const Placeholder1 = styled.div`
  position: relative;
  margin-right: 190px;
`;
export const Placeholder2 = styled.div`
  position: absolute;
  z-index: 8;
  top: 5%;
  left: 10%;

  filter: drop-shadow(30px 80px 180px rgba(0, 0, 0, 0.25));
`;
export const IconTextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;
export const IconText = styled.p`
  margin-left: 29px;
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: 4px;
  text-transform: uppercase;

  color: #000000;
`;
export const Icon = styled.div`
  position: relative;
`;
export const IconContainer = styled.section`
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
