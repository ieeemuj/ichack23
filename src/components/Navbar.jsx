import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <div className="z-20 app w-full">
        <nav className='mx-[10vw]'>
          <div
              className={`justify-around my-0  ${
                  !toggleMenu
                      ? " "
                      : "bg-[#FF3365] bg-opacity-0 backdrop-blur-0 duration-700"
              }`}
          >
            <div className="bg-[#FF3365] backdrop-blur-0 bg-opacity-0 w-full flex items-center align-middle justify-between mx-auto my-0">
              {/* Primary menu and logo */}
              <div className="flex flex-nowrap items-center align-middle justify-end gap-16 my-4">
                {/* logo */}
                <div>
                  <a href="/" className="flex items-center align-middle">
                    {/*<img*/}
                    {/*    src={logoIEEE}*/}
                    {/*    className="w-[150px] h-[45px]"*/}
                    {/*    alt="TECHNOID by IEEE"*/}
                    {/*/>*/}
                    <h1 className='text-2xl'>
                      IC HACK 2023
                    </h1>
                  </a>
                </div>
              </div>
              <div className="flex gap-6 align-middle">
                {/* primary */}
                <div className="hidden lg:inline-flex gap-8 align-middle relative items-center">
                  <a href="/" className='hover:underline hover:text-pracula'>HOME</a>
                  <a href="/track" className='hover:underline hover:text-pracula'>TRACKS</a>
                  <a href="/" className='hover:underline hover:text-pracula'>CONTACT</a>
                  <a href="/about" className='hover:underline hover:text-pracula'>ABOUT</a>
                  <a href="/sponsor" className='hover:underline hover:text-pracula'>SPONSORS</a>
                  <a href="/team" className='hover:underline hover:text-pracula'>TEAM</a>
                  <a rel="noopener noreferrer" href="#" className="px-6 py-2 font-medium border-white border-0 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracxt">REGISTER</a>
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <Bars3Icon className="h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
              className={`z-40 w-full bg-[#bd93f9] backdrop-blur-0 bg-opacity-0 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                  !toggleMenu ? "h-0" : "h-screen py-16"
              }`}
          >
            <div className="px-8">
              <div className="flex flex-col font-light gap-16 text-2xl underline underline-offset-4 tracking-wider text-center">
                <a href="/">HOME</a>
                <a href="/track">TRACKS</a>
                <a href="/">CONTACT</a>
                <a href="/about">ABOUT</a>
                <a href="/sponsor">SPONSORS</a>
                <a href="/team">TEAM</a>
                <a rel="noopener noreferrer" href="#" className="px-6 py-2 font-medium border-white border-0 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracxt">REGISTER</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
