import styled, { keyframes } from "styled-components";

export const TopBottom = keyframes`
  0%{
   padding-top: 0;
   /* transform: scale(1.0, 1.0); */
  }

  50%{  
    padding-top: 1.8rem;
    /* transform: scale(1.2, 1.2); */
  }

  100%{
    padding-top: 0;
    /* transform: scale(1.0, 1.0); */
  }
`;


export const H2 = styled.h2`
  font-size: 2rem;
  padding: 0.3rem;
`;

export const Section = styled.section`
  min-height: calc(100vh - 6rem);
  padding: 6rem 2rem;
`;

export const Article = styled.article`
  width: 40rem;
`;

export const Form = styled.form`
  width: 25rem;
  margin: 0 auto;
  padding: .3rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.thirdColor};
  border-radius: .5rem;
  background: ${({ theme }) => theme.colors.thirdColor};
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondColor};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.font};
  border-radius: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const InputText = styled(Input).attrs({ type: "text" })``;

export const InputPassword = styled(Input).attrs({ type: "password" })``;

export const InputEmail = styled(Input).attrs({ type: "email" })``;

export const InputFile = styled(Input).attrs({ type: "file" })``;

export const InputTime = styled.input.attrs({ type: "date" })`
  width: 13rem;
  padding: 0.3rem;
  background: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.font};
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.font};
  border-radius: .5rem;
  font-size: 1.2rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.font};
`;

export const FormGroup = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
`;

export const P = styled.p`
  padding: 0.3rem;
  color: ${({ theme }) => theme.colors.font};
  font-size: 1rem;
  font-weight: bolder;
`;

export const ErrorMessage = styled(P)`
  color: ${({ theme }) => theme.colors.errorColor};
`;

export const Button = styled.button`
  width: 6rem;
  padding: 0.3rem 0.4rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const Span = styled.span`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
  font-size: 1rem;
  font-weight: bolder;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-size: 1.3rem;
`;

export const ButtonRegister = styled(Button)`
  width: 8rem;
  padding: .8rem;
  background: ${({ theme }) => theme.colors.registerColor};
  color: ${({ theme }) => theme.colors.font};
  outline: 0.1rem solid ${({ theme }) => theme.colors.registerColor};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.fourthColor};
  font-size: 1.3rem;

  &:hover {
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.fourthColor};
  }
`;

export const ButtonLogin = styled(Button)`
  width: 8rem;
  padding: .8rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.font};
  outline: 0.1rem solid ${({ theme }) => theme.colors.fourthColor};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.fourthColor};
  font-size: 1.3rem;

  &:hover {
    background: ${({ theme })=> theme.colors.fourthColor};
    color: ${({ theme }) => theme.colors.firstColor};
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.fourthColor};
  }
`;
