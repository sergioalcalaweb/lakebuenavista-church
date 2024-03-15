"use client"

import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/react"
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
    <form onSubmit={onSubmit} className="light mx-auto max-w-lg space-y-4">
      <Input
        type="email"
        label="Email"
        variant="underlined"
        isInvalid={errors.email ? true : false}
        errorMessage={errors.email?.message}
        {...register("email", {
          required: "ingresa un email",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "ingresa un email valido",
          },
        })}
      />
      <Input
        type="text"
        label="Nombre"
        variant="underlined"
        isInvalid={errors.email ? true : false}
        errorMessage={errors.email?.message}
        {...register("name", {
          required: "ingresa un nombre",
          minLength: {
            value: 1,
            message: "Ingresa un nombre mas grande",
          },
        })}
      />
      <Textarea
        label="Mensaje"
        variant="underlined"
        isInvalid={errors.email ? true : false}
        errorMessage={errors.email?.message}
        rows={8}
        {...register("message", {
          required: "Ingresa un mensaje valido",
          minLength: {
            value: 5,
            message: "Tu mensaje es muy corto",
          },
        })}
      />
      <Toaster />
      <div className="mt-4 text-center">
        <Button
          type="submit"
          variant="solid"
          color="default"
          size="lg"
          disabled={!isValid}
          isLoading={isSubmitting}
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
