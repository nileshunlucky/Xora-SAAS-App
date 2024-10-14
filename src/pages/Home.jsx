import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";

const imgs = [
  { img: 'https://wallpapercave.com/wp/wp12097664.jpg' },
  { img: 'https://images.hdqwalls.com/download/cyber-night-boy-standing-on-car-4k-yt-1280x1024.jpg' },
  { img: 'https://wallpapercave.com/wp/wp12097707.jpg' },
  { img: 'https://wallpapercave.com/wp/wp3518698.jpg' },
];

const Home = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => curr === 0 ? imgs.length - 1 : curr - 1);
  }

  const next = () => {
    setCurr((curr) => curr === imgs.length - 1 ? 0 : curr + 1);
  }


  return (
    <div className='home'>
      <div className="featured h-screen md:flex justify-center items-center mx-auto max-w-[1252px] p-3">
        <div className="featured-content md:w-1/2 flex flex-col gap-3">
          <p className='text-sky-300 text-xl font-bold'>Video editing</p>
          <h1 className='md:text-7xl text-5xl font-bold'>Amazingly simple</h1>
          <p className='text-2xl text-blue-200 font-semibold'>We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.</p>
          <button className='p-3 px-5 relative bg-[#162561] hover:bg-[#0e1841] active:scale-[.98] rounded-2xl w-fit flex justify-between items-center gap-3 before:absolute top-0 before:inset-0 hover:before:border-2
            hover:before:border-sky-300 before:p-3 before:px-5 before:rounded-2xl'>
            <i className="fa-solid fa-bolt text-xl" />
            <p className='text-xl text-bold text-sky-300'>Get Started</p>
          </button>
        </div>
        <div className="hero-img md:w-1/2">
          <img className='md:h-[1200px] object-contain'
            src="https://ui8-xora-ca7b53925e5b.herokuapp.com/_next/image?url=%2Fimages%2Fhero.png&w=3840&q=100"
            alt="hero"
          />
        </div>
      </div>

      <div className="pricing my-12 h-full md:max-w-[1200px] mx-auto md:flex justify-center items-center">
        <div className="core relative md:w-1/3 flex flex-col justify-center items-center gap-5 bg-[#080d26] border-2 border-sky-300 md:rounded-l-2xl rounded-2xl p-5 py-[50px] md:border-r-transparent">
          <span className="absolute bg-[#080d26] p-1 border-2 border-sky-300 rounded-full top-[-40px] left-[40%]">
            <i className="fa-brands fa-stumbleupon-circle text-7xl"></i>
            <img src="glowArrow.svg" alt="" />
          </span>
          <div className="title mt-12">
            <h1 className="text-lg border-2 border-[#2ef1ff] text-[#2ef1ff] font-bold px-4 py-1 rounded-full uppercase">Core</h1>
          </div>
          <div className="price flex flex-col justify-center items-center gap-2 border-b-2 border-sky-700/20 pb-5">
            <h1 className="text-7xl font-bold flex gap-1">$19 <span className="text-2xl text-zinc-300">/mo</span></h1>
            <p className="text-2xl font-semibold">Best for solo creators</p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 100MB Cloud storage</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 100+ prompt templates</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 5 projects</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 24/7 support</li>
          </ul>
          <div className="btn">
            <button className="py-3 px-7 border-2 border-blue-950 hover:border-y-sky-300  flex gap-3 items-center bg-gradient-to-b from-blue-800 to-blue-950 rounded-2xl
             hover:bg-gradient-to-b hover:from-blue-950/70 hover:to-blue-950/70 my-5">
              <i className="fa-solid fa-star text-[#2ef1ff] text-xl"></i>
              <p className="text-xl font-bold uppercase">get started</p>
            </button>
          </div>
        </div>

        <div className="over-drive relative md:w-1/3 flex flex-col justify-center items-center gap-5 bg-[#080d26] border-2 border-sky-300 rounded-3xl p-5 py-[110px]">
          <span className="absolute bg-[#080d26] p-1 border-4 border-sky-300 rounded-full top-[-50px] left-[36%]">
            <i className="fa-brands fa-gg-circle text-8xl" />
          </span>
          <div className="title mt-12">
            <h1 className="text-lg border-2 border-[#2ef1ff] text-[#2ef1ff] font-bold px-4 py-1 rounded-full uppercase">
              Overdrive
            </h1>
          </div>
          <div className="price flex flex-col justify-center items-center gap-2 border-b-2 border-sky-700/20 pb-5">
            <h1 className="text-7xl font-bold flex gap-1">$79 <span className="text-2xl text-zinc-300">/mo</span></h1>
            <p className="text-2xl font-semibold">most popular plan</p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> All Starter features</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 1TB additional storage</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> Unlimited projects</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> Analytics</li>
          </ul>
          <div className="btn">
            <button className="py-3 px-7 border-2 border-blue-950 hover:border-y-sky-300  flex gap-3 items-center bg-gradient-to-b from-blue-800 to-blue-950 rounded-2xl
             hover:bg-gradient-to-b hover:from-blue-950/70 hover:to-blue-950/70 my-5">
              <i class="fa-solid fa-crown text-[#2ef1ff] text-xl" />
              <p className="text-xl font-bold uppercase">get started</p>
            </button>
          </div>
        </div>

        <div className="team relative md:w-1/3 flex flex-col justify-center items-center gap-5 bg-[#080d26] border-2 border-sky-300 md:rounded-r-2xl rounded-2xl p-5 py-[50px] md:border-l-transparent">
          <span className="absolute bg-[#080d26] p-1 px-2 border-2 border-sky-300 rounded-tl-2xl rounded-br-2xl top-[-40px] left-[40%]">
            <i className="fa-brands fa-square-pied-piper text-7xl"></i>
            <img src="glowArrow.svg" alt="" />
          </span>
          <div className="title mt-12">
            <h1 className="text-lg border-2 border-[#2ef1ff] text-[#2ef1ff] font-bold px-4 py-1 rounded-full uppercase">Core</h1>
          </div>
          <div className="price flex flex-col justify-center items-center gap-2 border-b-2 border-sky-700/20 pb-5">
            <h1 className="text-7xl font-bold flex gap-1">$39<span className="text-2xl text-zinc-300">/mo</span></h1>
            <p className="text-2xl font-semibold">Best for solo creators</p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 100MB Cloud storage</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 100+ prompt templates</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 5 projects</li>
            <li className="text-lg text-blue-100/80 font-semibold"><i className="fa-solid fa-circle-check text-blue-700 border border-blue-700/20 rounded-xl p-2" /> 24/7 support</li>
          </ul>
          <div className="btn">
            <button className="py-3 px-7 border-2 border-blue-950 hover:border-y-sky-300  flex gap-3 items-center bg-gradient-to-b from-blue-800 to-blue-950 rounded-2xl
             hover:bg-gradient-to-b hover:from-blue-950/70 hover:to-blue-950/70 my-5">
              <i class="fa-solid fa-shield text-[#2ef1ff] text-xl" />
              <p className="text-xl font-bold uppercase">get started</p>
            </button>
          </div>
        </div>

      </div>
      <div className="headline-faq max-w-[1250px] mx-auto py-[100px] px-[70px]">
        <div className="flex flex-col gap-5 max-w-[640px]">
          <h1 className="md:text-[45px] text-3xl font-bold">Curiosity didn't kill the cat, it got answers.</h1>
          <p className="text-xl font-semibold text-sky-100/90">You've got questions, we've got answers.</p>
        </div>
      </div>
      <div className="faq border border-[#0c1838] relative md:flex">
        <span className="absolute top-[-40px] md:left-[47%] left-[40%] bg-[#080d26] p-3 border-2 border-[#0c1838] rounded-full">
          <img className="h-[50px]" src="glow.svg" alt="theme" />
        </span>
        <div className="md:my-0 my-10">
          <div className="md:w-1/2 border-r border-[#0c1838] md:p-12">
            <Accordion />
          </div>
          <div className="md:w-1/2 md:p-12">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="download p-10">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <div className="brand flex gap-5 items-center">
            <img className="md:h-[100px] h-[70px]" src="https://raw.githubusercontent.com/adrianhajdin/xora/refs/heads/main/public/favicon.ico" alt="logo" />
            <h1 className="text-3xl font-bold">XORA</h1>
          </div>
          <div className="os">
            <p className="md:text-xl opacity-80">Try it now for free on iOS, Android, PC, <br /> Web - whatever your flavor, we’ve got <br /> you covered.</p>
          </div>
          <div className="os-icons flex gap-12 justify-center items-center">
            <span><i className="fa-brands fa-apple text-3xl hover:text-[#2ef1ff] cursor-pointer"></i></span>
            <span><i className="fa-brands fa-google-play text-3xl hover:text-[#2ef1ff] cursor-pointer"></i></span>
            <span><i className="fa-brands fa-windows text-3xl hover:text-[#2ef1ff] cursor-pointer"></i></span>
            <span><i className="fa-solid fa-globe text-3xl hover:text-[#2ef1ff] cursor-pointer"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
