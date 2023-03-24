import SearchBar from "./SearchBar";
import { StyledHero } from "./Styles/Hero.styled";

const Hero = ({ handleOnSubmit, setSearchTerm }) => {
  return (
    <StyledHero>
      <h1>Catálogo de bienes y servicios</h1>
      <p className="hero-description">
        Accede de manera rápida y sencilla a la información del{" "}
        <span>Catálogo de Bienes y Servicios (CABYS)</span>, ya sea buscando por
        <span> descripción</span> o por <span>número de código.</span>
      </p>
      <SearchBar
        handleOnSubmit={handleOnSubmit}
        setSearchTerm={setSearchTerm}
      />
    </StyledHero>
  );
};

export default Hero;
