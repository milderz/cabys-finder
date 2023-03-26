import { StyledLoginSection } from "./Styles/LoginSection.styled";
import Button from "./Button";
import { UserAuth } from "../Context/AuthContext";

const LoginSection = () => {
  const { googleSignIn, setLoadingUserData } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledLoginSection>
      <img
        className="no-logged-img"
        src="../src/assets/padlock.png"
        alt="sin-resultados"
        height="60px"
      />
      <h2 className="no-results-title">
        Inicia sesión para ver tu códigos guardados
      </h2>
      <Button
        version="main-small"
        color="accent"
        text="Iniciar sesión"
        icon="faArrowRightFromBracket"
        handleFunction={handleGoogleSignIn}
      />
    </StyledLoginSection>
  );
};

export default LoginSection;
