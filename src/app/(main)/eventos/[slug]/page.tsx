import BlogLayout from "@/components/blog-layout"
import { getEvent } from "@/utils/events"
import { Metadata } from "next"
import Image from "next/image"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const event = await getEvent(slug)

  return {
    title: event.attributes.title,
    description: event.attributes.description,
    openGraph: {
      title: event.attributes.title,
      images: [event.attributes.image.data.attributes.formats.thumbnail.url],
      description: event.attributes.description,
    },
    twitter: {
      card: "summary_large_image",
      title: event.attributes.title,
      description: event.attributes.description,
      images: [event.attributes.image.data.attributes.formats.thumbnail.url],
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const event = await getEvent(slug)
  const markup = {
    __html: event.attributes.blog,
  }

  return (
    <BlogLayout
      name={event.attributes.title}
      image={
        <Image
          alt="eventos"
          fill
          src={event.attributes.image.data.attributes.formats.large.url}
          loading="eager"
          priority={true}
          className="absolute inset-0 brightness-50 h-screen/2"
          sizes="100vw"
          quality={80}
          style={{
            objectFit: "cover",
          }}
        />
      }
    >
      <article
        className="px-5 py-4 md:py-12 md:px-14 flex flex-col gap-5"
        dangerouslySetInnerHTML={markup}
      />
    </BlogLayout>
  )
}

export default Page
