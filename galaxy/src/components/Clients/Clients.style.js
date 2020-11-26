import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const ClientsContainer = styled.div`
  display: flex;
  padding-top: 102px;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1110px;
  margin: auto;
  ${Media.md`
  flex-direction:column;
  align-items:center;
  padding-right:10px;
  padding-left: 10px;

`}
`;
export const OurClients = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: left;
  margin: 0;
  ${Media.md`
  
  padding-bottom: 10px;

`}
`;
export const WorkedWith = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const WorkedHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
export const WorkedText = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  opacity: 0.7;
  line-height: 28px;
  color: #222222;
`;
export const Partners = styled.section`
  display: flex;
  align-items: center;
  max-width: 1110px;
  margin: auto;
  padding-top: 59px;
  justify-content: space-between;
  margin-top: 82px;
  margin-bottom: 137px;
  ${Media.sm`
  flex-direction:column;
  align-items:center;
  flex-wrap: wrap;
  gap:60px;
`}
  ${Media.md`

padding-right:10px;
padding-left: 10px;

`}
`;
