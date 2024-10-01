export const Footer = () => {
  return (
    <footer className='text-lg custom-container flex items-center flex-wrap gap-5 justify-between py-6 px-6 bg-c-dark text-c-light'>
      <section className='flex flex-col gap-4 items-center'>
        <p className='font-medium tracking-tight'>Desarrollada con <span className="px-1">❤</span> y mucha 🎵</p>
      </section>
      <section className="flex items-center gap-2">
        <p className="font-medium">Redes sociales:</p>
        <div className="flex gap-4">
          <a target="__blank" href="https://www.instagram.com/onlybangers_music/">
            <i className='bx bxl-instagram text-2xl'></i>
          </a>
        </div>
      </section>
    </footer>
  )
}