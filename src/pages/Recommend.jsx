import { useRef } from "react"
import { getRandomColor } from "../utils/makeArrayWithIcons"
import './Recommend.css'
import { API_URLS } from "../constants/urls";

export const Recommend = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const showError = () => {
    inputRef.current.classList.add('link-input')
    setTimeout(() => {
      inputRef.current.classList.remove('link-input')
    }, "1500");
    alert('Tu canción debe de ser un link válido')
    buttonRef.current.disabled = false;
  }

  const showCorrectSong = () => {
    alert('Gracias por tu recomendación, en breves la subiremos a la web!')
  }

  const handleSend = async (e) => {
    buttonRef.current.disabled = true;
    e.preventDefault();
    const songLink = e.target['link'].value
    const description = e.target['description'].value

    fetch(API_URLS.sendSongToBot, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        songLink,
        description,
      }),
    })
      .then(res => res.json())
      .then(response => {
        if (response.ok) {
          showCorrectSong()
          location.reload();
          return
        }
        showError();
      })
  }
  const bgColor = getRandomColor().primary

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
        <section style={{ backgroundColor: bgColor }} className={`recommend-screen-container px-6 flex items-center justify-center mb-6 border-b-[2px] border-b-black`}>
          <form onSubmit={handleSend} className={`custom-container-card z-50 bg-white px-4 py-5 flex flex-col rounded-xl share-screen-card`} >
            <h3 className="text-2xl recommend-header font-bold text-center primary-header">Sube tu recomendación</h3>
            <div className="flex flex-col gap-3 mb-3 recommend-input-container">
              <input ref={inputRef} type="text" id="link" placeholder="Link de la canción" className={`cta-button rounded-xl custom-container px-5 py-2 font-medium bg-white outline-none w-full`} />
              <textarea rows={6} type="text" id="description" placeholder="Comentario (opcional)" className="resize-none cta-button rounded-xl custom-container px-5 py-2 font-medium bg-white outline-none w-full" />
              {/* <input type="text" id="userName" placeholder="Tú nombre (opcional)" className="cta-button rounded-xl custom-container px-5 py-2 font-medium bg-white outline-none w-full" /> */}
            </div>
            <button ref={buttonRef} className="cta-button flex w-full items-center gap-2 rounded-full text-center justify-center custom-container px-12 py-2 font-bold bg-c-yellow">
              Recomendar
            </button>
          </form>
        </section>
      </div>
    </div >
    // <div className="">
    //   <div className="relative overflow-clip">
    //     {/* <img src="/share-screen/arrow.webp" className="sticker-share-screen" id="arrow-sticker" />
    //     <img src="/share-screen/pretty-flower.webp" className="sticker-share-screen" id="pretty-flower-sticker" />
    //     <img src="/share-screen/rounded-star.webp" className="sticker-share-screen" id="rounded-star-sticker" />
    //     <img src="/share-screen/heart.webp" className="sticker-share-screen" id="heart-sticker" />
    //     <img src="/share-screen/doble-corchea.webp" className="sticker-share-screen" id="doble-corchea-sticker" />
    //     <img src="/share-screen/corchea.webp" className="sticker-share-screen" id="corchea-sticker" />
    //     <img src="/share-screen/star.webp" className="sticker-share-screen" id="star-sticker" />
    //     <img src="/share-screen/switch.webp" className="sticker-share-screen" id="switch-sticker" /> */}
    //     <section className={`bg-c-purple recommend-screen-container px-10 flex items-center justify-center mb-6 border-b-[2px] border-b-black`}>
    //       <div className="custom-container px-10 py-12 rounded-xl bg-white">
    //         <h3 className="text-3xl font-bold text-center primary-header mb-10">Sube tu recomendación</h3>
    //         <div className="flex flex-col gap-3 mb-3">
    //           <input type="text" id="link-input" placeholder="Link de la canción" className="cta-button rounded-xl text-center custom-container px-5 py-2 font-medium bg-white outline-none w-full" />
    //           <textarea rows={4} type="text" id="link-input" placeholder="Comentario (opcional)" className="resize-none cta-button rounded-xl text-center custom-container px-5 py-2 font-medium bg-white outline-none w-full" />
    //         </div>
    //         <button className="cta-button flex w-full items-center gap-2 rounded-full text-center justify-center custom-container px-12 py-2 font-bold bg-c-yellow">
    //           Recomendar
    //         </button>
    //       </div>
    //     </section>
    //   </div>
    // </div >
  )
}