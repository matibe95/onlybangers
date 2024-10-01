import { Link, useNavigate } from "react-router-dom";
import { useGetUrlParams } from "../hooks/useGetUrlParams"
import { SONGS_LIST } from "../mocks/songs";
import './ShareScreen.css'

export const ShareScreen = () => {
  const { id } = useGetUrlParams();
  const currentSong = SONGS_LIST.find(item => item.id == id)

  if (!currentSong) {
    return;
  }

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
          <ShareScreenCard
            author={currentSong.author}
            title={currentSong.title}
            thumbnail={currentSong.thumbnail}
            url={currentSong.url}
          />
        </section>
      </div>
      <div className="share-buttons-container items-center gap-4 w-full justify-center px-10">
        {
          currentSong.youtube && (
            <Link to={currentSong.youtube} className="rounded-full flex justify-center items-center gap-2 custom-container primary-animation px-12 py-2 font-bold bg-c-red text-xl">
              <i className='bx bxl-youtube text-2xl'></i>
              Youtube
            </Link>
          )
        }
        {
          currentSong.spotify && (
            <Link to={currentSong.spotify} className="rounded-full flex justify-center items-center gap-2 custom-container primary-animation px-12 py-2 font-bold bg-c-lightgreen text-xl">
              <i className='bx bxl-spotify text-2xl'></i>
              Spotify
            </Link>
          )
        }
      </div>
    </div >
  )
}

const ShareScreenCard = ({ title = 'Titulo', author = "Artista", thumbnail = "", id }) => {
  return (
    <article className={`custom-container-card z-50 bg-white px-4 py-5 flex flex-col rounded-xl share-screen-card`} >
      <img src={thumbnail} className="mb-4 rounded-xl" alt={`imagen-de-${title}`} />
      <h2 className="font-bold text-2xl mb-2">{title}</h2>
      <p className="font-medium text-xl">{author}</p>
    </article>
  )
}
