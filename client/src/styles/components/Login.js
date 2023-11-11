import styled from "styled-components";
import {
  Section,
  Button,
  ErrorMessage,
  ButtonLogin,
} from "../GeneralComponents";

export const SectionLogin = styled(Section)`
  background: ${({ theme }) => theme.colors.firstColor};
`;

export const ButtonSave = styled(Button)`
  background: ${({ theme }) => theme.colors.saveColor};
  color: ${({ theme }) => theme.colors.font};
  outline: 0.1rem solid ${({ theme }) => theme.colors.saveColor};

  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.fourthColor};
  }
`;

export const ErrorServer = styled(ErrorMessage)`
  text-align: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.font};
  transition: 0.4s linear;
`;

export const LoginButton = styled(ButtonLogin)`
  width: 6rem;
  padding: 0.6rem;
  font-size: 1rem;
`;
