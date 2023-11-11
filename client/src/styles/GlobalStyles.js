import { createGlobalStyle } from "styled-components";


export const theme = {
  colors: {
    header: "#4F4557",
    navbar: "#393646",
    firstColor: "#393646",
    secondColor: "#4F4557",
    thirdColor: "#6D5D6E",
    fourthColor: "#F4EEE0",
    font: "#F4EEE0",
    deleteColor: "#C70039",
    updateColor: "#0079FF",
    saveColor: "#7743DB",
    registerColor: "#793FDF",
    /* loginColor: "", */
    errorColor: "#CE5A67",
  },
};


export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none; outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  html{
    font-size: 62.5%; /*10px*/
    overflow-x: hidden;
  }

  .link{
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.font};

    &:hover{
      color: ${({ theme }) => theme.colors.fourthColor};
      text-shadow: 0.1rem 0.1rem 1rem ${({ theme }) =>
        theme.colors.fourthColor};
    }
  }

  .active{
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.font};
    border-bottom: .1rem solid ${({ theme }) => theme.colors.font};
    text-shadow: 0.1rem 0.1rem 1rem ${({ theme }) => theme.colors.fourthColor};
  }

  //responsive;
  @media screen and (max-width: 770px){
    html{
      font-size: 60%;
    }

    nav{
      position: absolute;
      top: 99%;
      left: 0;
      right: 0;
      clip-path: polygon(0 0, 100% 0, 100% 0, 1% 0);
      flex-direction: column;
    }

    ul{
      flex-direction: column;
    }


    .active-nav{
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

  }

  @media screen and (max-width: 450px){
    html{
      font-size: 55%;
    }
  }
`;
