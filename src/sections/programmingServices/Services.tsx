import services from "./data/data";
import TitleSections from "../../common/TitleSections";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".service-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
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
      <TitleSections title={t("services.title")} />

      <div className="flex justify-center items-center">
        <div
          ref={containerRef}
          className="w-[93%] grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-stretch"
        >
          {services.map((data, index) => (
            <div
              key={index}
              className="service-item card2 flex flex-col h-full justify-center gap-2 p-6 2xl:p-10"
            >
              <div className="flex gap-2 items-center text-[#0091b9]">
                <div className="border-1 border-[#0091b9] bg-[#0091b9]/3 rounded-lg p-2">
                  <data.icon />
                </div>
                <span className="font-semibold text-xl">{t(data.title)}</span>
              </div>

              <span className="text-neutral-400">{t(data.description)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
