import prismadb from "@/lib/prismadb";

const EventItemPage = async (
  {params} : { params: {serviceId: string }}
) => {
  console.log(params)

  const event = await prismadb.event.findFirst({
    where: {
      id: params.serviceId
    }
  })

  return (
    <div>add / edit event page</div>
  );
}
 
export default EventItemPage;