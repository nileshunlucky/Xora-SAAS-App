import { useState } from "react"
import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useGSAP(() => {
    if (toggle) {
      const tl = gsap.timeline();
      tl.from('ul li', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.25,
        y: -50,
      })
    };
  }, [toggle])

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={`navbar ${navbar ? 'bg-black' : 'bg-transparent'} transition-all duration-500 h-[60px] sticky top-0 flex justify-center items-center px-12 select-none z-50`}>
      <ul className="flex justify-between items-center gap-5 w-full">
        <NavLink to={'/'}><li className={`font-bold md:flex ${toggle ? 'flex' : 'hidden'} hover:text-sky-300
        absolute md:static top-[59px] left-0 bg-[#023e8a] hover:bg-opacity-50 md:bg-transparent w-full md:w-auto md:py-0 py-4
         justify-center uppercase`}>Features</li></NavLink>
        <i className="fa-solid fa-circle text-blue-600 text-[5px] md:flex hidden" />
        <NavLink to={'/'}><li className={`font-bold md:flex ${toggle ? 'flex' : 'hidden'} hover:text-sky-300
        absolute md:static top-[113px] left-0 bg-[#0077b6]  hover:bg-opacity-50 md:bg-transparent justify-center w-full md:w-auto md:py-0 py-4 uppercase`}>Pricing</li></NavLink>
        <NavLink to={'/'}>
          <span className="flex gap-2 items-center">
            <img className="w-[40px]" src="https://raw.githubusercontent.com/adrianhajdin/xora/refs/heads/main/public/favicon.ico" alt="logo" />
            <h1 className="text-3xl font-bold">Xora</h1>
          </span>
        </NavLink>
        <NavLink to={'/'}><li className={`font-bold md:flex ${toggle ? 'flex' : 'hidden'} hover:text-sky-300
         absolute md:static top-[168px] left-0 bg-[#0096c7]  hover:bg-opacity-50 md:bg-transparent justify-center w-full md:w-auto md:py-0 py-4  uppercase`}>Faq</li></NavLink>
        <i className="fa-solid fa-circle text-blue-600 text-[5px] md:flex hidden" />
        <NavLink to={'/'}><li className={`font-bold active:bg-red-600 md:flex ${toggle ? 'flex' : 'hidden'} hover:text-sky-300
        absolute md:static top-[223px] left-0 bg-[#00b4d8]  hover:bg-opacity-50 md:bg-transparent justify-center w-full md:w-auto md:py-0 py-4   uppercase`}>Download</li></NavLink>
      </ul>
      <i onClick={() => setToggle(!toggle)} className={`fa-solid fa-${toggle ? 'xmark' : 'wand-magic-sparkles'} hover:text-blue-600 text-xl md:hidden  w-[50px] flex justify-center items-center p-2 rounded-full`} />
    </nav>
  )
}

export default Navbar
