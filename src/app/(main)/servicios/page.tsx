import Image from "next/image"
import {
  Card,
  CardHeader,
  Image as ImageUI,
  CardFooter,
  Button,
} from "@nextui-org/react"
import SectionName from "@/components/section-name"
import type { Metadata } from "next"
import ogImage from "@/app/(main)/opengraph-image.png"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Nuestros servicios religiosos ofrecen un espacio para la reflexión espiritual, la conexión comunitaria y el crecimiento personal.",
  openGraph: {
    title: "Servicios",
    description:
      "Nuestros servicios religiosos ofrecen un espacio para la reflexión espiritual, la conexión comunitaria y el crecimiento personal.",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    title: "Servicios",
    description:
      "Nuestros servicios religiosos ofrecen un espacio para la reflexión espiritual, la conexión comunitaria y el crecimiento personal.",
    card: "summary_large_image",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
}

const Services = () => {
  return (
    <SectionName
      name="Servicios"
      image={
        <Image
          alt="servicios"
          fill
          src="/image/ministerios.jpg"
          loading="eager"
          priority={true}
          className="absolute inset-0"
          quality={80}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      }
    >
      <article className="px-7 py-12 md:px-8">
        <p className="text my-4">
          Bienvenido a nuestra comunidad de la Iglesia Adventista del Séptimo
          Día Lake Buena Vista. Aquí te invitamos a explorar los diversos
          servicios y actividades que nuestra iglesia ofrece para enriquecer tu
          vida espiritual y fortalecer tu conexión con la comunidad.
        </p>
        <p className="text my-4">
          Descubre una amplia gama de oportunidades para crecimiento espiritual,
          desde nuestros servicios de adoración semanales hasta grupos de
          estudio bíblico, eventos especiales y programas de servicio
          comunitario. En Lake Buena Vista, nos esforzamos por proporcionar un
          ambiente acogedor donde personas de todas las edades y orígenes puedan
          encontrar inspiración, compañerismo y apoyo en su viaje espiritual.
        </p>
        <p className="text my-4">
          Descubre cómo puedes participar y contribuir al bienestar de nuestra
          comunidad y más allá. Ya seas un miembro de largo tiempo o estés
          buscando un lugar para comenzar tu viaje espiritual, te invitamos a
          ser parte de la familia de Lake Buena Vista.
        </p>
      </article>
      <div className="w-full gap-2 grid grid-cols-12 grid-rows-3 px-7 pb-7 md:px-8">
        <Card className="col-span-12 sm:col-span-4 md:row-span-2">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">
              Banco de alimentos
            </h4>
          </CardHeader>
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1709579748/comida_13bc18a6cf.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/banco-de-alimentos"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-8 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">Culto Divino</h4>
          </CardHeader>
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1709603872/servicios_b2424147b9.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/culto-divino"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-6 md:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">
              Miércoles de Adoración
            </h4>
          </CardHeader>
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1709344622/tim_wildsmith_ZV_Ncjpfzi94_unsplash_d349592bdb.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/servicio-de-adoracion"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-6 md:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">
              Escuela Sabática
            </h4>
          </CardHeader>
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1709602786/escuela2_434a970b16.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/escuela-sabatica"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-8 h-[300px]">
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1711168574/PHOTO_2024_03_22_21_40_03_3e791d30f8.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/together-strong"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">
              Sociedad de jovenes
            </h4>
          </CardHeader>
          <ImageUI
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dseqdhfur/image/upload/v1709688319/escuela_acaf5e3e33.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 flex justify-end">
            <Button
              radius="full"
              size="sm"
              as={Link}
              href="/servicios/sociedad-de-jovenes"
            >
              Saber más
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionName>
  )
}

export default Services
