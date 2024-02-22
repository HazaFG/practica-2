import './Header.css'
import imagenComida from '../assets/comida.png'


export const Header = () => {
  return (
    <div className='container'>

        <img src={imagenComida} alt="imagen de sarten" />

        <h1>Recetas de cocina</h1>

        {/* <input type="text" /> */}
    </div>    
  )
}
