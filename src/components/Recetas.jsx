import { recetas } from '../Data/recetas'
import { Receta } from './Receta'
import './Recetas.css'

export const Recetas = () => {
  return (
    <>
        <div className='container'>

            <input type="text" placeholder='Buscar' className='buscar'/>
            <button className='boton'>Buscar</button>
        

        </div>

        <div className="container-recetas">
            {
                recetas.map((receta,index) => (
                    <Receta key={index} img={receta.img} titulo={receta.titulo} descripcion={receta.descripcion}/>
                ))
            }

        </div>
    </>






  )
}
