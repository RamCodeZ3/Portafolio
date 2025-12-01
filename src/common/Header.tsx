import { useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown} from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activate, setActivate] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [english, setEnglish] = useState(false);

  function handleDivClick() {
    window.location.reload();
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language); // Cambia el idioma
  };

  useEffect(()=>{
    if(english){
      changeLanguage('en')
    } else changeLanguage('es')
  },[english])

  return (
    <div className="fixed flex justify-center items-center w-full h-18 z-10 top-2 p-4">
      <header className="flex w-[95.5%] max-w-[1600px] z-10 top-0 left-0 py-2 px-2 items-center justify-around bg-[#0091b9]/3 border border-white/10 rounded-lg backdrop-blur-2xl">
        <img src="general/RamCodeHeader.png" onClick={handleDivClick} className="cursor-pointer size-[30%] md:size-[11%] select-none" alt="Logo"/>
        <div className="hidden md:flex gap-4">
          <a href="#start" className='text_hover'>{t('header.start')}</a>
          <a href="#exp" className='text_hover'>{t('header.experience')}</a>
          <a href="#services" className='text_hover'>{t('header.services')}</a>
          <a href="#about" className='text_hover'>{t('header.about')}</a>
          <a href="#contacts" className='text_hover'>{t('header.contacts')}</a>
        </div>
        
        <div className=" pr-1 flex gap-2 w-max items-center justify-center ">
          <span className='font-semibold text-lg'>ES</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={english} onChange={(e) => setEnglish(e.target.checked)}/>

            <div className="relative w-9 h-5 bg-[#004457] rounded-full
                peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-brand-soft
                after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                peer-checked:bg-[#0091b9]">
            </div>
          </label>
          <span className='font-semibold text-lg'>EN</span>
        </div>
          
          <div className='md:hidden' onClick={()=>{setActivate(!activate)}}>
                {activate ? <X/>: <Menu/>}
          </div>
      </header>
      {activate && (
          <div className="absolute top-17.5 md:hidden w-[83%] font-semibold flex flex-col gap-3 bg-black/40 backdrop-blur-2xl border-1 border-[#035f78] rounded-b-lg px-2 py-4">
            <div className='flex gap-12 justify-center'>
              <a href="#start" className='border-b-1 border-[#035f78]'>{t('header.start')}</a> 
              <a href="#exp" className='border-b-1 border-[#035f78]'>{t('header.experience')}</a>
              <a href="#services" className='border-b-1 border-[#035f78]'>{t('header.services')}</a> 
            </div>
            <div className='flex gap-12 justify-center'>
              <a href="#about" className='border-b-1 border-[#035f78]'>{t('header.about')}</a> 
              <a href="#contacts" className='border-b-1 border-[#035f78]'>{t('header.contacts')}</a>
            </div>
          </div>
        )}
    </div>
  );
}
