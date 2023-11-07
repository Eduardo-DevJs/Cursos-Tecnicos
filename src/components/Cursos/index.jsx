import './cursos.css';
import Enfermagem from '/image/vacina.png';
import Desenvolvimento from '/image/computador.png';
import Rh from '/image/processo.png';
import Adm from '/image/despesas.png';
import Alimentos from '/image/cana-de-acucar.png';
import Agropecuaria from '/image/agricultura.png';
import Zootec from '/image/vaca.png';
import Agronegocio from '/image/financeiro.png';

const Cursos = () => {
  return (
    <section className="courses">
      <ul className="list_courses container">
        <li className="item_course">
          <img src={Enfermagem} alt="" />
          <h3 className='text_course'>enfermagem</h3>
        </li>
        <li className="item_course">
          <img src={Desenvolvimento} alt="" />
          <h3 className='text_course'>densenvolvimento de sistemas</h3>
        </li>
        <li className="item_course">
          <img src={Rh} alt="" />
          <h3 className='text_course'>recursos humanos</h3>
        </li>
        <li className="item_course">
          <img src={Adm} alt="" />
          <h3 className='text_course'>administracao</h3>
        </li>
        <li className="item_course">
          <img src={Alimentos} alt="" />
          <h3 className='text_course'>açucar e álcool</h3>
        </li>
        <li className="item_course">
          <img src={Agropecuaria} alt="" />
          <h3 className='text_course'>agropecuária</h3>
        </li>
        <li className="item_course">
          <img src={Zootec} alt="" />
          <h3 className='text_course'>zootecnia</h3>
        </li>
        <li className="item_course">
          <img src={Agronegocio} alt="" />
          <h3 className='text_course'>agronegócio</h3>
        </li>
      </ul>
    </section>
  );
};

export default Cursos;
