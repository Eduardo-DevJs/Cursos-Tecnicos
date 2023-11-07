import './footer.css';
import logoFooter from '/image/logo2.png';
import Globo from '/image/GlobeHemisphereWest.svg';
import Telefone from '/image/Phone.svg';
import Email from '/image/EnvelopeSimple.svg';
import Facebook from '/image/FacebookLogo.svg';
import Instagram from '/image/InstagramLogo.svg';
import Linkedin from '/image/LinkedinLogo.svg';

const Footer = () => {
  return (
    <>
      <footer className="bg_footer">
        <div className="footer container">
          <img src={logoFooter} alt="logo footer" />

          <ul className="list_contact">
            <li className="item_contact">
              <img src={Globo} alt="Globo" />
              <div>
                <small>Rua Codelândia, 1367</small>
                <strong>Cafelândia, SP</strong>
              </div>
            </li>
            <li className="item_contact">
              <img src={Telefone} alt="Telefone" />
              <div>
                <strong>+55 27 9888-10106</strong>
              </div>
            </li>
            <li className="item_contact">
              <img src={Email} alt="Email" />
              <div>
                <strong>dudev2001@gmail.com</strong>
              </div>
            </li>
          </ul>

          <div className="about">
            <h3>Sobre a Etec Cafelândia</h3>
            <p>
              Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
              Moreira Martins Aguiar se destaca no ensino médio e técnico,
              recebendo constantemente menções e congratulações em todo o estado
              de São Paulo.{' '}
            </p>

            <ul className="socials">
              <li className="item_social">
                <a href="#">
                  <img src={Instagram} alt="" />
                </a>
              </li>
              <li className="item_social">
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
              </li>
              <li className="item_social">
                <a href="#">
                  <img src={Linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <p className='footer_p'>Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os direitos reservados.</p>
    </>
  );
};

export default Footer;
