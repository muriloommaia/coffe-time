import styled from 'styled-components';

interface Props{
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  flexWrap?: string;
  justifyContent?: string;
}

export const FlexDiv = styled.div<Props>`
align-items: ${({ alignItems }) => alignItems};
display: flex;
flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
flex-wrap: ${({ flexWrap }) => flexWrap};
justify-content: ${({ justifyContent }) => justifyContent};
::-webkit-justify-content {
  justify-content: ${({ justifyContent }) => justifyContent};
}
`;

export const MainContainer = styled(FlexDiv)`
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
`;
