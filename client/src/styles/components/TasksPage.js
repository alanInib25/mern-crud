import { Section, Button, H2 } from "../GeneralComponents";
import styled from "styled-components";

export const SectionTaskPage = styled(Section)`
  background: ${({ theme })=> theme.colors.firstColor};
`;

export const NoTasksMessage = styled(H2)`
  color: ${({ theme })=> theme.colors.font}
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1rem;
`;
