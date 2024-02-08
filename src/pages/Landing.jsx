import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>tracking </span>
            App
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            molestiae veritatis culpa ex suscipit, unde animi quis quia nobis
            laborum.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job junt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
