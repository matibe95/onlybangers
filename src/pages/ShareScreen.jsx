import { Link, useNavigate, useParams } from "react-router-dom";
import './ShareScreen.css'
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip'
import { API_URLS } from "../constants/urls";

export const ShareScreen = () => {
  const { referenceId } = useParams();
  const { data, loading, error } = useFetch(API_URLS.searchById + referenceId);

  const currentSong = data

  return (
    <div className="">
      <div className="relative overflow-clip">
        <img src="/share-screen/arrow.webp" className="sticker-share-screen" id="arrow-sticker" />
        <img src="/share-screen/pretty-flower.webp" className="sticker-share-screen" id="pretty-flower-sticker" />
        <img src="/share-screen/rounded-star.webp" className="sticker-share-screen" id="rounded-star-sticker" />
        <img src="/share-screen/heart.webp" className="sticker-share-screen" id="heart-sticker" />
        <img src="/share-screen/doble-corchea.webp" className="sticker-share-screen" id="doble-corchea-sticker" />
        <img src="/share-screen/corchea.webp" className="sticker-share-screen" id="corchea-sticker" />
        <img src="/share-screen/star.webp" className="sticker-share-screen" id="star-sticker" />
        <img src="/share-screen/switch.webp" className="sticker-share-screen" id="switch-sticker" />
        <section className={`bg-c-blue share-screen-container px-10 flex items-center justify-center mb-6 border-b-[2px] border-b-black`}>
          {
            loading
              ? (
                <p className="text-xl font-semibold">Cargando...</p>
              )
              : <ShareScreenCard
                author={currentSong.author}
                title={currentSong.title}
                thumbnail={currentSong.thumbnail}
                url={currentSong.url}
                description={currentSong?.description}
              />
          }

        </section>
      </div>
      <div className="share-buttons-container items-center gap-4 w-full justify-center px-10">
        {
          currentSong?.youtube_link && (
            <Link to={currentSong.youtube_link} className="rounded-full flex justify-center items-center gap-2 custom-container primary-animation px-12 py-2 font-bold bg-c-red text-xl">
              <i className='bx bxl-youtube text-2xl'></i>
              Youtube
            </Link>
          )
        }
        {
          currentSong?.spotify_link && (
            <Link to={currentSong.spotify_link} className="rounded-full flex justify-center items-center gap-2 custom-container primary-animation px-12 py-2 font-bold bg-c-lightgreen text-xl">
              <i className='bx bxl-spotify text-2xl'></i>
              Spotify
            </Link>
          )
        }
      </div>
    </div >
  )
}

export const ShareScreenCard = ({ title = 'Titulo', author = "Artista", thumbnail = "", id, description }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    if (description) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <article onClick={flipCard} className={`custom-container-card z-50 bg-white px-4 py-5 flex flex-col rounded-xl share-screen-card card-front cursor-pointer`} >
        <img src={thumbnail} className="mb-4 rounded-xl" alt={`imagen-de-${title}`} />
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="font-medium text-xl">{author}</p>
      </article>
      <article onClick={flipCard} className={`card-back custom-container-card z-50 bg-white px-4 py-5 flex flex-col rounded-xl justify-end cursor-pointer`} >
        <p className="italic text-lg">{description}</p>
      </article>
    </ReactCardFlip>
  )
}
