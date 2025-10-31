import contactsInfo from '../data/data';
import { useTranslation } from 'react-i18next';

export default function FastContacts() {
  const { t } = useTranslation();

  return (
    <>
      <div className="card2 w-full h-full flex flex-col gap-4 p-5">
        <b className="text-xl">{t('contacts.fastTitle')}</b>
        {contactsInfo.map((contact, i) => (
          <a key={i} href={contact.link} target="_blank">
            <div className="card2 flex cursor-pointer gap-2 rounded-md hover:scale-103 transition-all duration-300 p-2 md:w-[98%] lg:w-80 h-auto">
              <div className="card flex justify-center items-center p-3">
                {contact.icon == null?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></g></svg>
                  : <contact.icon size={16} />
                }

              </div>
              <div className="flex flex-col justify-evenly">
                <h4 className="font-semibold text-[#035f78]">{contact.socialNetworking}</h4>
                <span className="text-xs">{t(contact.description)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
