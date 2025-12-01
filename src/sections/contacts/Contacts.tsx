import Form from "./components/Form";
import FastContacts from "./components/FastContacts";
import WorkingHours from "./components/WorkingHours";
import TitleSections from "../../common/TitleSections";
import { useTranslation } from "react-i18next";

export default function Contacts(){
  const { t } = useTranslation();
    return(
        <>
          <div className="flex flex-col justify-center items-center w-full">
            <TitleSections title={t("contacts.title")}/>
          <div className="flex flex-col lg:flex-row gap-8 w-[93%] text-neutral-400">
            <Form/>
            <div className="flex flex-col gap-4">
              <FastContacts/>
              <WorkingHours/>
            </div>
          </div>
        </div>
        </>
    )
}
