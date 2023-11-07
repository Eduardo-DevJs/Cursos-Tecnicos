import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './src/pages/Home';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Courses from './src/pages/Courses';
import News from './src/pages/News';
import Contact from './src/pages/Contact';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesPages;
