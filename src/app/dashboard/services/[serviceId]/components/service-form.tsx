'use client';

import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";
import { Service } from "@prisma/client";
import { Trash } from "lucide-react";
import { z } from "zod";
import Select from "@/components/ui/select";

interface ServiceFormProps {
  initialData: Service | undefined;
}

const formSchema = z.object({
  title: z.string().min(1),
  header: z.string(),
  dayWeek: z.string(),
  time: z.string().datetime(),
  frequency: z.string(),
  description: z.string()
})

type ServiceFormValues = z.infer<typeof formSchema>;


const ServiceForm = ({
  initialData
}: ServiceFormProps) => {
  const [loading, setLoading] = useState(false);

  return ( 
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
      <CardBody className="flex flex-col gap-2">
        <Input type="text" label="Title" />
        <div className="flex">
          <Select 
            label="Select day"
            options={[
              {key: 'monday', value:'Monday'},
              {key: 'tuesday', value:'Tuesday'},
              {key: 'wednesday', value:'Wednesday'},
              {key: 'thursday', value:'Thursday'},
              {key: 'friday', value:'Friday'},
              {key: 'saturday', value:'Saturday'},
              {key: 'sunday', value:'Sunday'},
            ]}
            onChange={(key) => console.log(key)}
          />
        </div>
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