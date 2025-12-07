import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleSections from '../../common/TitleSections';
import { exp } from './data/data';

gsap.registerPlugin(ScrollTrigger);

export default function Experiencie() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".exp-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <TitleSections title={t('experience.title')} />

      <div className="relative flex w-full justify-center items-center">
        
        <div
          ref={containerRef}
          className="flex flex-col gap-3 w-[90%] md:w-[93%] h-full  overflow-hidden"
        >
          {exp.map((data, index) => (
            <div
              key={index}
              className="exp-item flex flex-col md:flex-row gap-4 lg:gap-2"
            >
              <img
                src={data.img}
                className="w-full md:w-[40%] h-full rounded-2xl border-white/10 select-none"
              />

              <div className="flex flex-col justify-around card2 px-3 py-2 md:py-0 gap-2 lg:gap-0">
                <div className="flex flex-col">
                  <span className="text-[#0091b9] font-semibold text-2xl 2xl:text-3xl">
                    {data.rol}
                  </span>
                  <span className="text-white text-lg">{data.client}</span>
                </div>

                <p className="text-neutral-400 2xl:text-xl 2xl:leading-10">{t(data.description)}</p>

                <div className="flex gap-2">
                  {data.tech.map((t, i) => (
                    <img key={i} src={t} className="size-11 select-none" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
