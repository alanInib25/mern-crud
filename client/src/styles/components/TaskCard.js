import styled from "styled-components";
import { H2, Button, P } from "../GeneralComponents";

export const Card = styled.div`
  padding: 1.3rem;
  background: ${({ theme }) => theme.colors.secondColor};
  border-radius: 0.3rem;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardTitle = styled(H2)`
  color: ${({ theme }) => theme.colors.font};
  font-size: 1.3rem;
`;

export const CardDescription = styled(P)`
  width: 20rem;
  font-size: 1rem;
  font-weight: 100;
`;

export const CardInfoTask = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

export const CardButtonContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .5rem
`;

export const EditButton = styled(Button)`
  background: ${({ theme }) => theme.colors.updateColor };
  color: ${({ theme }) => theme.colors.font };
  &:hover{
    box-shadow: 0 0 .5rem ${({ theme }) => theme.colors.fourthColor };
  }
`;

export const DeleteButton = styled(Button)`
  background: ${({ theme }) => theme.colors.deleteColor };
  color: ${({ theme }) => theme.colors.font };

  &:hover{
    box-shadow: 0 0 .5rem ${({ theme }) => theme.colors.fourthColor };
  }
`;

export const Time = styled.time`
  color: ${({ theme }) => theme.colors.font};
`;