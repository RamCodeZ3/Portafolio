import Form from "./Form";
import FastContacts from "./FastContacts";
import WorkingHours from "./WorkingHours";
import TitleSections from "../../common/TitleSections";

function Contacts(){
    return(
        <>
          <div className="flex flex-col gap-4">
            <TitleSections title={"Contactos"}/>
          <div className="flex flex-col md:flex-row gap-6">
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