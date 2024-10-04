import { Link } from "react-router-dom"
import './Card.css'

export const Card = ({ clickable = false, title = 'Titulo', author = "Artista", thumbnail = "", url = "", referenceId }) => {
  const newStyles = clickable ? 'primary-animation' : 'cursor-default'
  const route = clickable ? `/${referenceId}` : ''

  return (
    <Link to={route} className={`${newStyles} card-container-home custom-container-card bg-white flex flex-col rounded-xl mb-6`} >
      <img src={thumbnail} className="mb-4 rounded-lg max-h-[282px] max-w-[282px]" alt={`imagen-de-${title}`} />
      <h2 className="font-bold truncate">{title}</h2>
      <p className="font-medium">{author}</p>
    </Link >
  )
}