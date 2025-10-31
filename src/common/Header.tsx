import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown} from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activate, setActivate] = useState(false)
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
  const selectRef = useRef(null)

  function handleDivClick() {
    window.location.reload();
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language); // Cambia el idioma
  };

  return (
    <div className="fixed flex justify-center items-center w-full h-18 z-10 top-0 p-4">
      <header className="card flex w-[92%] max-w-[1600px] z-10 top-0 left-0 py-2 px-2 items-center justify-around">
        <img src="general/RamCodeHeader.png" onClick={handleDivClick} className="cursor-pointer size-[30%] md:size-[11%]" alt="Logo"/>
        <div className="hidden md:flex gap-4">
          <a href="#start" className='text_hover'>{t('header.start')}</a>
          <a href="#exp" className='text_hover'>{t('header.experience')}</a>
          <a href="#services" className='text_hover'>{t('header.services')}</a>
          <a href="#about" className='text_hover'>{t('header.about')}</a>
          <a href="#contacts" className='text_hover'>{t('header.contacts')}</a>
        </div>
        <div className=" pr-1 select-container flex gap-2 w-max items-center relative">

          <div className="card dropdownmenu-custom flex-col gap-2 relative">
            <div className="select flex gap-2 px-2 py-2 font-semibold" onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}>
              <p>Idioma</p>
              <div className="select-arrow">
                <ChevronDown />
              </div>
            </div>
            {isDropdownMenuOpen && (
              <div className="card options flex flex-col font-semibold w-full gap-2 px-2 py-1 absolute top-12 z-[100]">
                <p onClick={() => changeLanguage("es")} className='text_hover'>Español</p>
                <p onClick={() => changeLanguage("en")} className='text_hover'>Ingles</p>
              </div>
            )}
          </div>
          
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
