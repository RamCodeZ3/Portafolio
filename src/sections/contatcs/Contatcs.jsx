import Form from "./Form";
import FastContacts from "./FastContacts";
import TitleSections from "../../common/TitleSections";

function Contacts(){
    return(
        <>
          <div className="flex flex-col gap-4">
            <TitleSections title={"Contactos"}/>
          <div className="flex gap-6">
            <Form/>
            <FastContacts/>
          </div>
        </div>
        </>
    )
}

export default Contacts;