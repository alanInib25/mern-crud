import styled from "styled-components";
import {
  Section,
  Button
} from "../GeneralComponents"

export const SectionForm = styled(Section)`
  background: ${({ theme }) => theme.colors.firstColor};
`;

export const ButtonSave = styled(Button)`
  background: ${({ theme }) => theme.colors.saveColor};
  color: ${({ theme }) => theme.colors.font};
  outline: .1rem solid ${({ theme }) => theme.colors.saveColor};

  &:hover{
    box-shadow: 0 0 .5rem ${({ theme }) => theme.colors.fourthColor };
  }
`;