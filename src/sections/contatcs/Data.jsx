import { Github,Phone } from "lucide-react"

const contactsInfo = [
    {
        socialNetworking: 'Github',
        description: 'Aqui podras ver todos mi proyectos',
        link: 'https://github.com/RamCodeZ3',
        icon: <Github/>,
    },
    {
        socialNetworking: 'Whatsapp',
        description: 'Comienza una conversacion conmigo',
        link: 'https://wa.me/+18092597829',
        icon: <Phone/>,
    },
    {
        socialNetworking: 'Discord',
        description: 'Comienza una conversacion conmigo',
        link: 'https://discordapp.com/users/1226267059478986789',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></g></svg>,
    },
]

export default contactsInfo;