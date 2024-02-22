import './Receta.css'

export const Receta = ({img,titulo,descripcion}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
    </div>
  )
}
