import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { serviceId, templateId, publicKey } from "../data/data"

interface FormContact {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Form() {
  const { t } = useTranslation();

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
        <span className="font-semibold text-2xl">{t("contacts.formTitle")}</span>
        <span>{t("contacts.formDescription")}</span>
      </div>

      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-1 flex-1">
            <label className="font-semibold">{t("contacts.formSpanName")}</label>
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
            <label className="font-semibold">Email</label>
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
          <label className="font-semibold">{t("contacts.formSpanService")}</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="input_form"
          >
            <option value="">{t("contacts.formOptionService")}</option>
            <option value="Sitio Web">{t("contacts.formOptionService1")}</option>
            <option value="Bot">Bot</option>
            <option value="Web Scraping">Web Scraping</option>
            <option value="Automatización de tareas">
              {t("contacts.formOptionService2")}
            </option>
            <option value="Otro">{t("contacts.formOptionService3")}</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">{t("contacts.formSpanMessage")}</label>
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
          className="bg-gradient-to-r from-[#035f78] to-[#121e4e] py-2 font-semibold rounded-lg"
        >
          {t("contacts.formButton")}
        </button>
      </form>
    </div>
  );
}
