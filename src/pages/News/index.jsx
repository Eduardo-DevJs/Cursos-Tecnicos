import './news.css';
import Noticias from '../../components/Noticias';

const News = () => {
  return (
    <>
      <section className="send_social">
        <div className="grid_social">
          <div className="text-upper d-flex facebook">
            <h2>compartilhar no facebook</h2>
          </div>
          <div className="text-upper d-flex instagram">
            <h2>compartilhar no Instagram</h2>
          </div>
          <div className="text-upper d-flex linkedin">
            <h2>compartilhar no Linkedin</h2>
          </div>
        </div>
      </section>

      <section className="banner_new">
        <div className="new container">
          <div className="new_target">
            <div className="banner">
              <h1 className="title_banner">Banner</h1>
            </div>
            <div className="texts_banner">
              <h2 className="description_new">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                expedita nihil commodi odit at.
              </h2>
              <span className="post">Postado em Julho 2, 2000</span>

              <blockquote>
                Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt excepturi nulla dicta quo, provident quaerat quidem modi
                error nostrum a vitae reprehenderit voluptate blanditiis
                deserunt recusandae alias omnis vero. Et! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Porro expedita nihil commodi
                odit at. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sunt excepturi nulla dicta quo, provident quaerat quidem
                modi error nostrum a vitae reprehenderit voluptate blanditiis
                deserunt recusandae alias omnis vero. Et! Thanks!
              </blockquote>
            </div>
          </div>

          <div className="others_news">
            <ul className="list_other-news">
              <h2>Outras notícias</h2>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Noticias />
    </>
  );
};

export default News;
