import MenuInstaller from '../components/MenuInstaller'
import './App.css'

import CursorManager from '../components/CustomCursor/CursorManager'
import CustomCursor from '../components/CustomCursor/CustomCursor'

export default function App() {

  return (
    <>
      <div className=" min-h-full
        justify-between w-screen overflow-hidden cursor-none
        bg-main-bg bg-no-repeat bg-cover bg-center bg-fixed">
        <CursorManager>
          <CustomCursor />
        </CursorManager>
        <div className="flex flex-row min-h-screen border-b-2 border-b-black">
          <div
            className="flex-col items-center w-1/6 bg-green-600 text-9xl
                  border-r-2 border-r-black justify-center hidden 
                  md:flex lg:text-[12rem]">
            <h1 className="text-2rem font-semibold font-array uppercase rotate-270">MusicXP</h1>
          </div>
          <div className="w-full items-center flex flex-col gap-14 relative">
            <MenuInstaller />
            <h1 className="text-[6.5rem] 
            md:text-[9rem] lg:text-[10rem] xl:text-[12rem]
            md:leading-28 lg:leading-32 xl:leading-40 
            font-clash font-extrabold 
            leading-20 px-12 uppercase text-black">
              The best widget for your music
            </h1>
            <a href="https://github.com/Gustavo-Mart/MusicXP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl text-center cursor-none
              md:text-7xl lg:text-8xl xl:text-9xl 
              md:leading-36 lg:leading-40 xl:leading-48 
              font-bold font-clash leading-32 tracking-wide px-12 
              bg-green-500 text-black hover:bg-green-400 transition-colors">
              <i className="fa-brands fa-github"></i>
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
