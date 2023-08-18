'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Trash } from "lucide-react";

const ServiceForm = () => {
  return ( 
    // title Services
    // description Manage services 
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="flex justify-between gap-3">
        <div className="flex flex-col">
          <p className="text-3xl">Service</p>
          <p className="text-small text-default-500">Create new service</p>
        </div>
        <Button isIconOnly color="danger" aria-label="delete service">
          <Trash size={24} />
        </Button>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-end gap-2">
          <Button color="default">
            Cancel
          </Button>
          <Button color="primary">
            Save
          </Button>
      </CardFooter>
    </Card>
   );
}
 
export default ServiceForm;