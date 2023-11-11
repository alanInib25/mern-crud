import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

//styles components
import {
  SectionHomePage,
  TitleHomePage,
  ImageHome,
  ImageContainer,
  FlexContainerHome,
  ParrafHome,
} from "../styles/components/HomePage";

import {
  Article,
  ButtonRegister,
  ButtonLogin,
  FlexContainer,
} from "../styles/GeneralComponents";

function HomePage() {
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();

  //si esta autenticado que redireccione;
  useEffect(() => {
    if (isAuthenticate) return navigate("/tasks");
  }, [isAuthenticate]);

  return (
    <SectionHomePage>
      <FlexContainerHome>
        <Article>
          <TitleHomePage>Task Manager</TitleHomePage>
          <ParrafHome>
            Registra tus tareas y citas de forma más cómoda confiable y
            segura...
          </ParrafHome>
          <FlexContainer>
            <ButtonRegister onClick={() => navigate("/register")}>
              Register
            </ButtonRegister>
            <ButtonLogin onClick={() => navigate("/login")}>Login</ButtonLogin>
          </FlexContainer>
        </Article>
        <ImageContainer>
          <ImageHome src="src/assets/svg/homePage.svg" />
        </ImageContainer>
      </FlexContainerHome>
    </SectionHomePage>
  );
}

export default HomePage;
