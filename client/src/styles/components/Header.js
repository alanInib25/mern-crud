import styled from "styled-components";
import { Span, InputFile } from "../GeneralComponents";

export const ContainerHeader = styled.div`
  padding: 3rem 0;
  position: relative;
  background: ${({ theme }) => theme.colors.firstColor};
`;

export const HeaderStyle = styled.header`
  height: 6rem;
  margin: 0 auto;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.header};
  position: fixed;
  top: 0;
  left: 0rem;
  right: 0rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ProfileContainer = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ImgUserContainer = styled.picture`
  position: relative;
`;

export const ImgUser = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  cursor: pointer;
  object-fit: cover;
  object-position: center;

  &:hover {
    outline: 0.1rem solid ${({ theme }) => theme.colors.fourthColor};
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.colors.fourthColor};
  }
`;

export const Username = styled(Span)`
  font-size: 1.3rem;
`;

export const ButtonMenu = styled.button`
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.thirdColor};
  color: white;
  cursor: pointer;
`;

export const InputFileImg = styled(InputFile)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
