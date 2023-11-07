import { Link } from 'react-router-dom';
import Logo from '/image/logo1.png';
import iconFacebook from '/image/FacebookLogo.svg';
import iconInstagram from '/image/InstagramLogo.svg';
import iconLinkedin from '/image/LinkedinLogo.svg';
import "./header.css"

const Header = () => {
  return (
    <header className="header_bg">
      <div className="header container">
        <img width={200} src={Logo} alt="Logo" />

        <ul className="menu">
          <li className='item_menu'>
            <Link to="/">Inicio</Link>
          </li>
          <li className='item_menu'>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li className='item_menu'>
            <Link to="/">Vagas</Link>
          </li>
          <li className='item_menu'>
            <Link to="/noticias">Notícias</Link>
          </li>
          <li className='item_menu'>
            <Link to="/contato">Contato</Link>
          </li>
          <li className='item_menu'>
            <Link to="/"><img src={iconInstagram} alt="Icone Instagram" /></Link>
          </li>
          <li className='item_menu'>
            <Link to="/"><img src={iconFacebook} alt="Icone Facebook" /></Link>
          </li>
          <li className='item_menu'>
            <Link to="/"><img src={iconLinkedin} alt="Icone Linkedin" /></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
