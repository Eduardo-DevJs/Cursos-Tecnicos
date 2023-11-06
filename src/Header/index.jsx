import { Link } from 'react-router-dom';
import Logo from "/image/logo1.png"

const Header = () => {
  return (
    <header className="header_bg">
      <div className="header container">
        <img src={Logo} alt="Logo" />

        <ul className='menu'>
          <Link to="/">Inicio</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;