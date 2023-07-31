import { about } from "../../portfolio";
import "./Hero.css";

const Hero = () => {
  const { photo, name } = about;
  return (
    <div className="about center">
      <div className="container-img">
        {photo && <img height="260px" alt="Avatar placeholder" src={photo} />}
      </div>
      {name && (
        <h1>
          <span className="about__name">{name}.</span>
        </h1>
      )}
    </div>
  );
};

export default Hero;
