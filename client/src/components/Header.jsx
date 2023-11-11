import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { uploadsRequest, getUploadsRequest } from "../api/uploads";

//componentes
import Navbar from "./Navbar";

//styles componentes
import {
  ContainerHeader,
  HeaderStyle,
  ProfileContainer,
  Username,
  ImgUser,
  ButtonMenu,
  ImgUserContainer,
  InputFileImg,
} from "../styles/components/Header";

import { FlexContainer } from "../styles/GeneralComponents";

function Header() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [pathImage, setPathImage] = useState("");
  const { isAuthenticate, user } = useAuth();

  useEffect(() => {
    initialResize();
    handleResize();
    handleScroll();
  }, []);

  //Si esta autenticado consulta kla imagen de perfil
  useEffect(() => {
    if (isAuthenticate) getImageProfile();
  }, [isAuthenticate]);

  //inicial ancho de pantalla para desplegar menubar;
  const initialResize = () => {
    if (window.innerWidth <= 770) return setShowMenuBar(true);
    else return setShowMenuBar(false);
  };

  //controla resize de navegador;
  const handleResize = () => {
    window.addEventListener("resize", function (e) {
      initialResize();
    });
  };

  //indica si se visualiza el navbar en responsivo
  const handleMenuBar = () => {
    handleShowNav((value) => !value);
  };

  //accion al scrolear pantalla;
  const handleScroll = () => {
    window.addEventListener("scroll", function () {
      handleShowNav(false);
    });
  };

  //funcion para cambiar estado;
  const handleShowNav = (boolean) => {
    setShowNav(boolean);
  };

  //funcion que carga la imagen de perfil
  const handleFile = async (e) => {
    try {
      const formData = new FormData();
      formData.set("image", e.target.files[0]);
      const image = await uploadsRequest(formData);
      setPathImage(image.data.path);
    } catch (error) {
      console.log(error);
    }
  };

  //funcion que trae la imagen de perfil en el caso de que exista;
  const getImageProfile = async () => {
    try {
      const image = await getUploadsRequest();
      console.log(image)
      if (image.status === 200) return setPathImage(image.data.path);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ContainerHeader>
      <HeaderStyle>
        <Link className="link" to={isAuthenticate ? "/tasks" : "/"}>
          Tasks Manager
        </Link>
        <FlexContainer>
          {isAuthenticate && (
            <ProfileContainer>
              <Username>Welcome, {user.username}</Username>
              <ImgUserContainer>
                <InputFileImg
                  onChange={handleFile}
                  id="image"
                  name="image"
                  className="image"
                />
                <ImgUser src={pathImage} />
              </ImgUserContainer>
            </ProfileContainer>
          )}
          <Navbar showNav={showNav} handleShowNav={handleShowNav} />
          {showMenuBar && (
            <ButtonMenu
              id="menuBars"
              className="fa-solid fa-bars"
              onClick={handleMenuBar}
            ></ButtonMenu>
          )}
        </FlexContainer>
      </HeaderStyle>
    </ContainerHeader>
  );
}

export default Header;
