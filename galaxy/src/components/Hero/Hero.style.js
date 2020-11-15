import styled from 'styled-components';
export const WorkTextContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1170px;
  padding-right: 5%;
  padding-left: calc((100% - 1110px) / 2);
  @media (max-width: 1110px) {
    padding-left: 0;
  }
`;
export const HeroContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: row;

  position: relative;
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
`;
export const VideoContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 50%;
  left: 50%;

  filter: drop-shadow(-20px 60px 220px rgba(0, 0, 0, 0.44));
`;
