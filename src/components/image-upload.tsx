'use client'

import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void,
  onRemove: (value: string) => void,
  value: string[];
}


const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value
}: ImageUploadProps) => {

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center flex-wrap gap-4">
        {value.map(url => (
          <Card
            key={url}
            radius="lg"
          >
            <Image
              alt="media"
              className="object-cover"
              height={250}
              src={url}
              width={250}
            />
            <CardFooter className="justify-end bottom-0 absolute z-10">
              <Button 
                isIconOnly 
                color="warning" 
                aria-label="delete image" 
                radius="lg" 
                size="sm"
                onClick={() => onRemove(url)}
              >
                <Trash size={20} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <CldUploadWidget
        uploadPreset="zhpzqwre"
        onUpload={onUpload}
      >
        {({ open }) => {
          function handleOnClick() {
            open();
          }
          return (
            <Button type="button" disabled={disabled} onClick={handleOnClick} startContent={<ImagePlus />}>
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
 
export default ImageUpload;