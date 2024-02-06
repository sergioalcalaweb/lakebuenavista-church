"use client"

import axios from "axios"
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner"
import { z } from "zod"

const Email = z.object({
  email: z.string().email().trim(),
  name: z.string().min(1).trim(),
  message: z.string().min(1).trim(),
})

type Email = z.infer<typeof Email>

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Email>()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/contact", data)
      reset()
      toast.success("Mensaje enviado, dios te bendiga")
    } catch (error) {
      toast.error("Error al enviar el mensaje intentalo mas tarde")
    }
  })

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label>Email</label>
        <input
          className="input"
          {...register("email", {
            required: "ingresa un email",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "ingresa un email valido",
            },
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
      <div>
        <label>Nombre</label>
        <input
          className="input"
          {...register("name", {
            required: "ingresa un nombre",
            minLength: {
              value: 1,
              message: "Ingresa un nombre mas grande",
            },
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
      <div>
        <label>Mensaje</label>

        <textarea
          className="input"
          rows={8}
          {...register("message", {
            required: "Ingresa un mensaje valido",
            minLength: {
              value: 5,
              message: "Tu mensaje es muy corto",
            },
          })}
        ></textarea>
        {errors.message && <span role="alert">{errors.message.message}</span>}
      </div>
      <Toaster />
      <div className="mt-4 text-center">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="group relative inline-block w-[250px] text-center overflow-hidden border border-gray-600 px-8 py-3 focus:outline-none focus:ring disabled:opacity-75 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-gray-600 transition-all group-hover:w-full group-active:bg-gray-500"></span>
          <span className="relative text-sm font-light text-gray-600 transition-colors group-hover:text-white">
            Enviar
          </span>
        </button>
      </div>
    </form>
  )
}

export default ContactForm