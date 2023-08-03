import Calendar from "@/components/calendar/calendar";
import Section from "@/components/section";
import { getEvents } from "@/utils/events";
import Image from "next/image";

const Events = async () => {
  const events = await getEvents();
  return (
    <Section
        name="Eventos"
        image={(
          <Image
            alt="eventos"
            fill
            src="/image/eventos.jpg"
            loading="eager"
            priority={true}
            className="absolute inset-0"
            sizes="100vw"
            quality={80}
            style={{
              objectFit: 'cover',
            }}
          />
        )}
      >
        <div className="pt-5">
          <Calendar events={events} />
        </div>
      </Section>
  );
}
 
export default Events;