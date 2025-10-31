import { Mail, Phone } from "lucide-react"
import type { ComponentType } from "react";

interface contactsProps {
    socialNetworking: string;
    description: string;
    link: string;
    icon:  ComponentType<{ size?: number }> | null;
}

const contactsInfo: contactsProps[] = [

    {
        socialNetworking: 'Email',
        description: 'contacts.fastDescription1',
        link: 'mailto:arammusset7@gmail.com',
        icon: Mail,
    },
    {
        socialNetworking: 'Whatsapp',
        description: 'contacts.fastDescription2',
        link: 'https://wa.me/+18092597829',
        icon: Phone,
    },
    {
        socialNetworking: 'Discord',
        description: 'contacts.fastDescription2',
        link: 'https://discordapp.com/users/1226267059478986789',
        icon: null,
    },
]

export const serviceId = 'service_x8baq0i';
export const templateId = 'template_20k24dc';
export const publicKey = 'a0aUhR9Iz3cWuxdtR';

export default contactsInfo;