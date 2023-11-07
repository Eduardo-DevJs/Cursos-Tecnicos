import './cursos.css';
import Sol from '/image/Sun.svg';
import User from '/image/User.svg';
import Tempo from '/image/HourglassMedium.svg';

const Courses = () => {
  return (
    <>
      <section className="course_selected">
        <h1 className="title_course">DESENVOLVIMENTO DE SISTEMAS</h1>

        <div className="grid_course container">
          <div className="photo_course">
            <h2>Foto do curso</h2>
          </div>

          <div className="texts_courses">
            <p className="description_course">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vitae vestibulum iaculis lacus aliquam convallis dolor risus.
              Velit vitae in lectus facilisis arcu tempor. Tempus dolor
              convallis accumsan nulla mi amet. Vulputate risus neque tellus
              faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada
              maecenas. Facilisis nunc nunc pellentesque libero arcu et leo
              dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio
              molestie nec, vulputate tellus tellus.
            </p>

            <div className="infomations_course">
              <ul className="list_information">
                <li>
                  <img src={Sol} alt="Sol" />
                  <div className="period">
                    <h4>Periodo</h4>
                    <p>Noturno</p>
                  </div>
                </li>
                <li>
                  <img src={User} alt="Coordenador" />
                  <div className="period">
                    <h4>Coordenador</h4>
                    <p>Eduardo</p>
                  </div>
                </li>
                <li>
                  <img src={Tempo} alt="Sol" />
                  <div className="period">
                    <h4>Duração</h4>
                    <p>2 anos</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='objective_bg'>
        <div className="objective container">
          <h1>Objetivos gerais</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate tellus tellus.</p>
        </div>
      </section>
      <section className='objective_bg-2'>
        <div className="objective container">
          <h1>Objetivos Especificos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate tellus tellus.</p>
        </div>
      </section>
    </>
  );
};

export default Courses;
