import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { serviceId, templateId, publicKey } from "../data/data"
import { ChevronDown, User, Mail, MonitorCog, MessageCircleMore } from "lucide-react";

interface FormContact {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Form() {
  const { t } = useTranslation();
  const [activate, setActivate] = useState(false)

  const [formData, setFormData] = useState<FormContact>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("✅ Mensaje enviado:", result.text);
      alert("Mensaje enviado con éxito 🎉");

      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error.text);
      alert("Hubo un error al enviar, inténtalo de nuevo.");
    }
  };

  return (
    <div className="card2 flex flex-col gap-3 p-4 w-full">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-2xl text-[#0091b9]">{t("contacts.formTitle")}</span>
        <span>{t("contacts.formDescription")}</span>
      </div>

      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex gap-1.5 items-center">
              <User size={16}/>
              <label className="font-semibold">{t("contacts.formSpanName")}</label>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contacts.formInputName")}
              required
              className="input_form"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
             <div className="flex gap-1.5 items-center">
              <Mail size={16}/>
              <label className="font-semibold">Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="input_form"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
           <div className="flex gap-1.5 items-center">
              <MonitorCog size={16}/>
              <label className="font-semibold">{t("contacts.formSpanService")}</label>
            </div>
          <div 
            className="input_form p-2 cursor-pointer flex justify-between"
            onClick={() => setActivate(!activate)}
          >
            {formData.service? formData.service : t("contacts.formOptionService") }
            <ChevronDown className={`${activate? "rotate-180": ""} transition-all duration-100`}/>
          </div>
          {activate && 
            <div className={` absolute flex flex-col gap-2 p-2 border border-[#0091b9] rounded-lg top-[58%] md:top-[52%] z-90 bg-neutral-900 w-[96%] font-semibold transition-all duration-300`}>
              <span
                className="hover:text-[#0091b9] cursor-pointer transition-all duration-200"  
                onClick={() => setFormData((prev) => ({ ...prev, service: 'Sitio Web' }))}
              >
                {t("contacts.formOptionService1")}
              </span>
              <span
                className="hover:text-[#0091b9] cursor-pointer transition-all duration-200"   
                onClick={() => setFormData((prev) => ({ ...prev, service: 'Bot' }))}
              >
                Bot
              </span>
              <span
                className="hover:text-[#0091b9] cursor-pointer transition-all duration-200"   
                onClick={() => setFormData((prev) => ({ ...prev, service: 'Web Scraping' }))}
              >
                Web Scraping
              </span>
              <span
                className="hover:text-[#0091b9] cursor-pointer transition-all duration-200"   
                onClick={() => setFormData((prev) => ({ ...prev, service: 'Automatización de tareas' }))}
              >
                {t("contacts.formOptionService2")}
              </span>
              <span
                className="hover:text-[#0091b9] cursor-pointer transition-all duration-200"   
                onClick={() => setFormData((prev) => ({ ...prev, service: 'Otro' }))}
              >
                {t("contacts.formOptionService3")}
              </span>
            </div>
          }
         
        </div>

        <div className="flex flex-col gap-1">
           <div className="flex gap-1.5 items-center">
              <MessageCircleMore size={16}/>
              <label className="font-semibold">{t("contacts.formSpanMessage")}</label>
            </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contacts.formTextareaMessage")}
            required
            className="h-30 input_form"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r text-white from-[#0091b9] to-[#121e4e] py-2 font-semibold rounded-lg"
        >
          {t("contacts.formButton")}
        </button>
      </form>
    </div>
  );
}
