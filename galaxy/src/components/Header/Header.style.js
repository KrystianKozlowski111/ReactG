import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const Headercontainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;
  height: 23.18px;
  margin: auto;
  padding-top: 59px;
  justify-content: space-between;
  padding-bottom: 59px;
  ${Media.md`
  align-items:center;
  padding-left:15px;
  padding-right:15px;
`}
  @media (max-width: 1110px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const Image = styled.div``;
export const Searchicon = styled.div``;
export const Menuicon = styled.div``;
