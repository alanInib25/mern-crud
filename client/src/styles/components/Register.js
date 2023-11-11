import styled from "styled-components";
import { Section, ButtonRegister } from "../GeneralComponents";

export const SectionRegister = styled(Section)`
  background: ${({ theme }) => theme.colors.firstColor};
`;

export const RegisterButton = styled(ButtonRegister)`
  width: 6rem;
  padding: 0.6rem;
  font-size: 1rem;
`;
