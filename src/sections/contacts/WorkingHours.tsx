import { useTranslation } from 'react-i18next';

function WorkingHours() {
  const { t } = useTranslation();

  return (
    <>
      <div className="card2 flex flex-col gap-2 w-auto p-5">
        <span className="text-xl font-semibold">{t('contacts.workingTitle')}</span>

        <div className="flex justify-between ">
          <span className="">{t('contacts.workingDays')}</span>
          <b className="text-[#035f78]">9:00 - 18:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="">{t('contacts.workingDay1')}</span>
          <b className="text-[#035f78]">10:00 - 16:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="">{t('contacts.workingDay2')}</span>
          <span className="text-red-600 font-semibold">{t('contacts.workingDay2Close')}</span>
        </div>
      </div>
    </>
  )
}

export default WorkingHours
