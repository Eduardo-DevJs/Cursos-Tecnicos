import "./estagios.css"

const Estagios = () => {
  return (
    <section className="grid">
      <div className="first_col">
        <h1 className="color-w">Estágios e empregos</h1>
      </div>
      <div className="second_col">
        <ul className="list_jobs">
          <li className="item_job">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Publicado em 00/00/2000</p>
            <a href="#">Mais sobre a vaga</a>
          </li>
          <li className="item_job">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Publicado em 00/00/2000</p>
            <a href="#">Mais sobre a vaga</a>
          </li>
          <li className="item_job">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Publicado em 00/00/2000</p>
            <a href="#">Mais sobre a vaga</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Estagios;
