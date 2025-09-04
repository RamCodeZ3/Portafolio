import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, publicKey } from "./Data";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,  
        form.current,
        publicKey   
      )
      .then(
        (result) => {
          console.log("✅ Mensaje enviado:", result.text);
          alert("Mensaje enviado con éxito 🎉");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Hubo un error al enviar, inténtalo de nuevo.");
        }
      );
  };

  return (
    <div className="card2 flex flex-col gap-3 p-4 w-full">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-2xl">Envíame un mensaje</span>
        <span>Completa el formulario y te responderé lo antes posible</span>
      </div>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-1 flex-1">
            <label className="font-semibold">Nombre</label>
            <input
              type="text"
              name="user_name"  
              placeholder="Tu nombre"
              required
              className="input_form"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="user_email"   
              placeholder="tucorreo@gmail.com"
              required
              className="input_form"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Servicio</label>
          <select
            name="service"   
            required
            className="input_form"
          >
            <option value="" className="bg-neutral-800">Selecciona un servicio</option>
            <option value="Sitio Web" className="bg-neutral-800">Sitio Web</option>
            <option value="Bot" className="bg-neutral-800">Bot</option>
            <option value="Web Scraping" className="bg-neutral-800">Web Scraping</option>
            <option value="Automatización de tareas" className="bg-neutral-800">Automatización de tareas</option>
            <option value="Otro" className="bg-neutral-800">Otro</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Mensaje</label>
          <textarea
            name="message" 
            placeholder="¿Cómo te puedo ayudar?"
            required
            className="h-30 input_form"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#035f78] to-[#121e4e] py-2 font-semibold rounded-lg"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Form;
