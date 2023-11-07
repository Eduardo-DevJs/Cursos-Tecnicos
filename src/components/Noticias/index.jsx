import { Link } from 'react-router-dom';
import './noticias.css';

const Noticias = () => {
  return (
    <section className="section_news">
      <div className="news container">
        <h1 className="title_news">Noticias</h1>

        <ul className="list_news">
          <li className="item_new">
            <div className="cover"></div>
            <div className="info_new">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <small>Postado em 00/00/00</small>
            </div>
          </li>
          <li className="item_new">
            <div className="cover"></div>
            <div className="info_new">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <small>Postado em 00/00/00</small>
            </div>
          </li>
          <li className="item_new">
            <div className="cover"></div>
            <div className="info_new">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <small>Postado em 00/00/00</small>
            </div>
          </li>
        </ul>

        <Link to="/noticias">Ver mais noticias</Link>
      </div>
    </section>
  );
};

export default Noticias;
