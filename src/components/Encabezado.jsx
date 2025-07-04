import { Link } from 'react-router-dom'
function Menu(){
return(
  <header className="encabezado">
    <div className="nave">
      <h1 className="Nom">Katherine Sailema</h1>
      <nav>
        <ul>
          <li><Link to="/">Quien soy</Link></li>
          <li><Link to="/proyectos">Mis proyectos</Link></li>
          <li><Link to="/experto">Experto</Link></li>
          <li><Link to="/testimonios">Testimonios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
    <div className="bienvenida">
      <h2>Bienvenido a mi portafolio</h2>
      <button className="but">portafolio</button>
    </div>
  </header>
)
}

export default Menu;
