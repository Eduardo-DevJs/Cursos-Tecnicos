import Cursos from '../../components/Cursos';
import Estagios from '../../components/Estagios';

import Informacoes from '../../components/Informations';
import Main from '../../components/Main';
import Noticias from '../../components/Noticias';
import './home.css';

const Home = () => {
  return (
    <>
      <Main />
      <Informacoes />
      <Cursos />
      <Estagios />
      <Noticias />
    </>
  );
};

export default Home;
