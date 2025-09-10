import Form from "./Form";
import FastContacts from "./FastContacts";
import WorkingHours from "./WorkingHours";
import TitleSections from "../../common/TitleSections";

function Contacts(){
    return(
        <>
          <div className="flex flex-col justify-center items-center w-full">
            <TitleSections title={"Contactos"}/>
          <div className="flex flex-col lg:flex-row gap-8 w-[90%]">
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

export default Contacts;