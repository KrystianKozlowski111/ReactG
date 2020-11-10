import styled from 'styled-components';
export const WorkTextContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 474px;
  padding-left: 126px;
`;
export const HeroContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1121px;
`;
export const WorkHeader = styled.h1`
  font-family: Fira Sans;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`;
export const WorkText = styled.p`
  margin-top: -22px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
export const Placeholder = styled.div`
  position: relative;
`;
export const Button = styled.button`
  display: inline-block;
  padding: 13px;
  font-family: Fira Sans;
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
  z-index: 8;
  position: relative;
  filter: drop-shadow(-20px 60px 220px rgba(0, 0, 0, 0.44));
`;
export const PlayButton = styled.button``;
