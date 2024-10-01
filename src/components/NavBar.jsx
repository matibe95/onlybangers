import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className='w-full py-4 px-9 bg-white border-b-[2px] border-b-c-dark'>
      <ul className='flex justify-between items-center'>
        <li>
          <Link className='flex items-center gap-2' to={"/"}>
            <img src="/onlybangers.png" id="only-bangers-navbar" />
          </Link>
        </li>
        <li className="flex gap-10 font-medium">
          <Link className="navbar-link hover:underline underline-offset-4 text-xl" to={'/'}>
            Proyecto
          </Link>
        </li>
      </ul>
    </nav>
  )
}