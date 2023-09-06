import prismadb from "@/lib/prismadb";
import ServiceForm from "./components/service-form";

const ServiceItemPage = async (
  {params} : { params: {serviceId: string }}
) => {
  console.log(params)

  const service = await prismadb.service.findFirst({
    where: {
      id: params.serviceId
    }
  })

  return (
    <ServiceForm initialData={service || undefined} />
  );
}
 
export default ServiceItemPage;