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
`;
export const Image = styled.div`
  width: 74.31px;
  height: 23.18px;
  left: 125px;
  top: 59px;
`;
export const Searchicon = styled.div`
  left: 51.25%;
  right: 47.28%;
  top: 0.91%;
  bottom: 98.8%;
`;
export const Menuicon = styled.div`
  width: 34px;
  height: 14px;
  left: 1201px;
  top: 64px;
`;
