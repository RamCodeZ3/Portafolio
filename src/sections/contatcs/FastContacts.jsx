import contactsInfo from "./Data";

function FastContacts() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 p-5 rounded-2xl">
        <b className="text-xl">Contacto Rápido</b>
        {contactsInfo.map((contact, i) => (
          <a key={i} href={contact.link} target="_blank">
            <div className="flex cursor-pointer gap-4 rounded-md p-2 w-auto h-auto border">
              <div className="rounded-lg flex justify-center items-center p-3 border">
                {contact.icon}
              </div>
              <div className="flex flex-col justify-evenly">
                <h4 className="font-semibold">{contact.socialNetworking}</h4>
                <span className="text-xs">{contact.description}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default FastContacts;
