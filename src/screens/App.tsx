import { useEffect, useState } from 'react'
import MenuInstaller from '../components/MenuInstaller'
import './App.css'

import CustomCursor from '../components/CustomCursor/CustomCursor'
import GlareHover from '../components/GlareHover'
import Shuffle from '../components/Shuffle'

export default function App() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const updateCursor = (e: MediaQueryListEvent | MediaQueryList) => setShowCursor(e.matches)

    // Initial check
    updateCursor(query)

    // Listener
    const handler = (e: MediaQueryListEvent) => updateCursor(e)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return (
    <>
      <div className=" min-h-full
        justify-between w-screen overflow-hidden cursor-none
        bg-main-bg bg-no-repeat bg-cover bg-center bg-fixed">
        {showCursor && <CustomCursor />}
        <div className="flex flex-row min-h-screen border-b-2 border-b-black">
          <div
            className="flex-col items-center w-1/6 bg-green-500 text-9xl
                  border-r-2 border-r-black justify-center hidden 
                  md:flex lg:text-[12rem]">
            <h1 className="text-2rem font-semibold font-array uppercase rotate-270">MusicXP</h1>
          </div>
          <div className="w-full flex flex-col gap-14 relative ">
            <MenuInstaller />
            <Shuffle
              text="The best widget for your music"
              shuffleDirection="down"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.05}
              threshold={0.1}
              triggerOnce={true}
              loop
              loopDelay={1.5}

              className="text-[6.5rem] 
                md:text-[9rem] lg:text-[10rem] xl:text-[12rem]
                md:leading-28 lg:leading-32 xl:leading-40 
                font-clash font-extrabold select-none
                leading-30 px-12 uppercase text-black"
            />
            <GlareHover
              width="fit-content"
              height="fit-content"
              background="transparent"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.7}
              glareAngle={-45}
              glareSize={250}
              transitionDuration={650}
              playOnce={false}
              className="rounded-none ml-12"
            >
              <a href="https://github.com/Gustavo-Mart/MusicXP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl text-center cursor-none
                md:text-7xl lg:text-8xl xl:text-9xl 
                md:leading-36 lg:leading-40 xl:leading-48 
                font-bold font-clash select-none leading-32 tracking-wide px-12 
                border-2 border-black hover:text-white 
                bg-green-500 text-black hover:bg-green-400 transition-colors">
                <i className="fa-brands fa-github"></i>
                Github
              </a>
            </GlareHover>
          </div>
        </div>
      </div>
    </>
  )
}
