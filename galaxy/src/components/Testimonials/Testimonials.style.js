import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const TextContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 540px;
  padding-right: 5%;
  padding-left: calc((100% - 1110px) / 2);
  @media (max-width: 1110px) {
    padding-left: 0;
  }
`;
export const MainContainer = styled.section`
  ${Media.md`
flex-direction:column;
align-items:center;
`}
  ${Media.sm`
overflow:hidden;
max-width:100%;
padding-left:10px;
`}
`;
export const Placeholder = styled.div`
  position: relative;
  max-width: 50%;
  margin-left: 125px;
  ${Media.sm`
  margin-left: 0px;
  max-width:100%;
  
  `}
`;
export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  ${Media.sm`
  flex-direction:column;
  align-items:center;
  `}
`;
export const UserTextContainer = styled.section`
  display: flex;
  padding-left: 31px;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0px;
  margin-top: 121px;
`;
export const UserContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  max-width: 290px;
`;
export const Buttoncontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 125px;
  justify-content: space-between;
  margin-top: 120px;
`;
export const ButtonLR = styled.button`
  background: none;
  border: none;
  outline: 0;
  padding: 0;
`;
