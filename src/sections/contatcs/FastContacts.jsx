import contactsInfo from "./Data";

function FastContacts() {
  return (
    <>
      <div className="card2 w-full h-full flex flex-col gap-4 p-5">
        <b className="text-xl">Contacto Rápido</b>
        {contactsInfo.map((contact, i) => (
          <a key={i} href={contact.link} target="_blank">
            <div className="card2 flex cursor-pointer gap-2 rounded-md p-2 md:w-80 h-auto">
              <div className="rounded-lg flex justify-center items-center p-3 border border-[#035f78] bg-black/40 text-">
                {contact.icon}
              </div>
              <div className="flex flex-col justify-evenly">
                <h4 className="font-semibold text-[#035f78]">{contact.socialNetworking}</h4>
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
