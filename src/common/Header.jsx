import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  function handleDivClick() {
    window.location.reload();
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value); // Cambia el idioma
  };

  return (
    <div className="fixed flex justify-center items-center w-full h-18 z-10 top-0 p-4">
      <header className="flex w-[90%] z-10 top-0 left-0 py-2 px-2 text-white items-center justify-around rounded-lg bg-black/40 backdrop-blur-2xl border-1 border-[#035f78]">
        <div className="flex items-center" onClick={handleDivClick}>
          <img src="/imagenHeader.png" className="" alt="Logo" />
          <span className="font-bold text-lg">RamCode</span>
        </div>
        <div className="hidden md:flex gap-4">
          <a href="#start">{t('header.start')}</a>
          <a href="#">{t('header.experience')}</a>
          <a href="#">{t('header.projects')}</a>
          <a href="#add">{t('header.services')}</a>
          <a href="#">{t('header.about')}</a>
          <a href="#start">{t('header.contacts')}</a>
        </div>
        <select
          id="language"
          onChange={changeLanguage}
          value={i18n.language}
          className="p-2 rounded-md border-1 border-[#035f78] bg-black/2 backdrop-blur-2xl"
        >
          <option value="es" className='bg-black/60 backdrop-blur-2xl'>Español</option>
          <option value="en" className='bg-black/60 backdrop-blur-2xl'>English</option>
        </select>
      </header>
    </div>
  );
}

export default Header;