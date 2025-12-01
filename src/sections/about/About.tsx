import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <TitleSections title={t('about.title')} />

      <div className="flex justify-center items-center">
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row items-center justify-between gap-4 w-[93%] p-4 bg-[#0091b9]/3 rounded-2xl border border-white/10"
        >
          <div className="w-[90%] lg:w-[60%] h-70 rounded-2xl border border-white/10">
            <img
              src="general/coding.png"
              alt=""
              className="w-full h-full object-cover rounded-2xl select-none"
            />
          </div>

          <div className="md:w-[68%] text-lg">
            <p className="text-neutral-400 w-full leading-10">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
