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
          <a href="#start">{t('welcome')}</a>
          <a href="#">{t('experience')}</a>
          <a href="#">{t('projects')}</a>
          <a href="#add">{t('services')}</a>
          <a href="#">{t('about')}</a>
          <a href="#start">{t('contacts')}</a>
        </div>
        <select
          id="language"
          onChange={changeLanguage}
          value={i18n.language}
          className="p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </header>
    </div>
  );
}

export default Header;