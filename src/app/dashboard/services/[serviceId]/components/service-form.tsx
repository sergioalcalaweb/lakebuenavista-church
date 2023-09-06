'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { Service } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Trash, Timer } from "lucide-react";
import { z } from "zod";
import { daysOfWeek, frequency } from "@/utils/constants";
import ImageUpload from "@/components/image-upload";
import { generateTimeIntervals } from "@/utils/time";

interface ServiceFormProps {
  initialData: Service | undefined;
}

const formSchema = z.object({
  title: z.string().min(1),
  header: z.string(),
  dayWeek: z.string().min(1, 'Please select one day of the week'),
  time: z.string().min(1),
  frequency: z.string().min(1),
  description: z.string()
})

type ServiceFormValues = z.infer<typeof formSchema>;


const ServiceForm = ({
  initialData
}: ServiceFormProps) => {
  const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ServiceFormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<ServiceFormValues> = data => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <Input 
            className="grow"
            type="text"
            label="Title"
            validationState={errors.title && 'invalid'}
            errorMessage={errors.title?.message}
            {...register('title')}
          />
          <div className="flex gap-2 justify-between">
            <Controller
              name="header"
              control={control}
              render={
                ({field}) => (
                  <div className="flex flex-col gap-2 w-1/2">
                    <label>Header</label>
                    <ImageUpload 
                      value={field.value ? [field.value] : []} 
                      onChange={(url) => field.onChange(url)} 
                      onRemove={() => field.onChange('')}
                    />
                  </div>
                )
              }
            />
            <div className="grow flex gap-2 w-1/2">
              <Select
                label="Day of service"
                validationState={errors.dayWeek && 'invalid'}
                errorMessage={errors.dayWeek?.message}
                {...register('dayWeek')}
              >
                {daysOfWeek.map((day) => (
                  <SelectItem key={day.value} value={day.value}>
                    {day.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Time of service"
                validationState={errors.time && 'invalid'}
                errorMessage={errors.time?.message}
                startContent={<Timer />}
                {...register('time')}
              >
                {generateTimeIntervals(15).map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Frequency of service"
                validationState={errors.frequency && 'invalid'}
                errorMessage={errors.frequency?.message}
                {...register('frequency')}
              >
                {frequency.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                    
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </CardBody>
        <Divider/>
        <CardFooter className="flex justify-end gap-2">
          <Button color="default">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
   );
}
 
export default ServiceForm;