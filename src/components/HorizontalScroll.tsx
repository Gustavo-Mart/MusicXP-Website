import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../assets/Captura de tela 2026-01-30 210728.png';
import img3 from '../assets/Captura de tela 2026-01-30 210755.png';
import img4 from '../assets/Captura de tela 2026-01-30 210813.png';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    img: img2,
    title: "Discover the Music",
    desc: "Explore a vast library of tracks tailored to your taste. Experience high-fidelity sound like never before.",
  },
  {
    img: img3,
    title: "Seamless Integration",
    desc: "Connects perfectly with your favorite music services. Keep your playlists synchronized across all devices.",
  },
  {
    img: img4,
    title: "Visual Experience",
    desc: "Enjoy stunning visuals that react to the beat. A completely immersive interface designed for music lovers.",
  },
];

export default function HorizontalScroll() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xTranslation = -(totalWidth - viewportWidth);

      gsap.to(slider, {
        x: xTranslation,
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + totalWidth,
          invalidateOnRefresh: true,
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="overscroll-none h-fit ">
      <div className="h-screen flex items-center overflow-hidden">
        <div ref={sliderRef} className="flex gap-4 px-4 md:px-20 w-max">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative h-[80vh] md:h-[90vh] w-[85vw] md:w-fit shrink-0 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-6 md:p-10 pb-4 backdrop-blur-lg border-2 border-green-600 rounded-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[40%] md:h-full w-full md:w-auto rounded-xl object-contain"
              />
              <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-8 max-w-md text-green-200 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 font-clash bg-green-600 px-2 py-1">{item.title}</h3>
                <p className="text-base md:text-xl text-black font-now-regular leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
