import styled from "styled-components";
import { Section, H1, FlexContainer, P, TopBottom } from "../GeneralComponents";

export const SectionHomePage = styled(Section)`
  padding-top: 1rem;
  background: ${({ theme }) => theme.colors.firstColor};
`;

export const TitleHomePage = styled(H1)`
  width: 100%;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.font};
  font-weight: 900;
`;

export const FlexContainerHome = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  padding: 3rem 0; 
  flex-wrap: wrap;
`;

export const ImageContainer = styled.picture`
  width: 40rem;
  height: 45rem;
  overflow: hidden;
  animation: ${TopBottom} 2s linear infinite;
`;

export const ImageHome = styled.img`
  width: 100%;
  object-position: center;
  object-fit: cover;
`;

export const ParrafHome = styled(P)`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
`;