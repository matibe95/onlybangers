import { Link } from "react-router-dom"
import { Card } from "../components/Card"
import { SONGS_LIST } from "../mocks/songs"
import { Footer } from "../components/Footer"
import './Home.css'

export const Home = () => {
  return (
    <div>
      <article className="main-container overflow-clip relative bg-white border-b-[2px] border-b-black">
        <img src="/corchea.webp" id="corchea-img" />
        <img src="/doble-corchea.webp" id="disket-img" />
        <img src="/rounded-star.webp" id="rounded-star-img" />
        <img src="/cursor.webp" id="cursor-img" />
        <img src="/single-star.webp" id="single-star-img" />
        <section className="primary-container bg-c-primary py-12 px-10 h-[500px] flex items-center justify-center">
          <div className="main-container-container z-50">
            <h1 className="text-3xl primary-header md:text-5xl xl:text-6xl font-bold">En busqueda de la <br /> armonía que nos conecta.</h1>
            <p className="text text-base text-pretty xl:text-xl font-medium">OnlyBangers es una colección de canciones recomendadas por <br /> amantes de la música, <span className="underline underline-offset-[2px]">esperando a ser descubiertas.</span></p>
            <div className="flex gap-4 py-2 text-lg flex-wrap">
              <Link to={"/"} className="cta-button rounded-full text-center custom-container px-12 py-2 font-bold bg-c-yellow">
                Recomendar
              </Link>
              <Link to={"/"} className="contact-button rounded-full text-center custom-container px-12 py-2 font-bold bg-white">
                Contacto
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-c-lightgreen second-color-container"></section>
      </article>
      <section className="relative flex items-center w-full py-5 h-[75px] sm:h-[80px] bg-c-purple border-b-[8px] border-b-c-dark overflow-clip">
        <div className="flex flex-row primary-header absolute -left-10 italic uppercase gap-8 text-xl sm:text-3xl justify-between w-full">
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
          <h3 className="font-bold">Bangers</h3>
        </div>
      </section>
      {/* <div className="w-full gap-6 px-6 pt-8 hidden">
        <button className="custom-container gap-2 flex items-center w-full py-2 bg-c-accent justify-center rounded-full">
          Cuadrícula
          <i className='bx bxs-dashboard text-xl'></i>
        </button>
        <button className="custom-container gap-2 flex items-center w-full py-2 bg-white justify-center rounded-full">
          Horizontal
          <i className='bx bxs-objects-horizontal-left text-xl'></i>
        </button>
      </div> */}
      <div className="home-cards-container flex gap-4 flex-wrap">
        {SONGS_LIST.map((item) => {
          return (
            <Card
              clickable
              id={item.id}
              key={item.id}
              title={item.title}
              author={item.author}
              thumbnail={item.thumbnail}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
