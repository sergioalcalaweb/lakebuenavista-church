import EventPage from "@/components/event-page"
import { Service } from "@/types/events"
import { getService } from "@/utils/events"
import { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const event: Service = await getService(slug)

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      images: [event.image.thumbnail.url],
      description: event.description,
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image.thumbnail.url],
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const event = await getService(slug)

  return <EventPage event={event} isService />
}

export default Page
