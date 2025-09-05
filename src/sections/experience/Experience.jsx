import { SquareArrowOutUpRight } from 'lucide-react';
import TitleSections from '../../common/TitleSections';
import { useTranslation } from 'react-i18next';
import exp from './Data';

function Experiencie() {
  const { t } = useTranslation();

  const Openpage = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <TitleSections title={t('experience.title')} />
      <div className="flex flex-col w-full justify-center items-center">
        {exp.map((data, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <div className="card flex flex-col md:flex-row gap-4 w-[90%] bg-black/30 h-auto">
              <div
                className="relative group w-full md:w-[70%] h-full cursor-pointer"
                onClick={() => Openpage(data.link)}
              >
                {data.img && (
                  <img
                    src={data.img}
                    alt={t(data.description) || 'Project image'}
                    className="w-full rounded-lg rounded-b-none md:rounded-b-lg md:rounded-r-none h-auto object-cover"
                    loading="lazy" // Lazy loading para optimización
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-black/70 text-white text-sm p-4 rounded-lg shadow-lg flex items-center gap-2">
                    <SquareArrowOutUpRight size={18} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 px-3 py-2 md:px-0">
                <span className="font-bold text-lg text-[#035f78]">{data.client}</span>
                <p className="text-white">{t(data.description)}</p>
                <div className="flex items-center justify-center px-2 py-1 bg-[#035f78]/30 rounded-lg w-20">
                  <span className="w-auto text-sm">{data.rol}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experiencie;