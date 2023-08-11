'use client';

import { YoutubeVideo } from '@/types';
import { Card, CardBody, CardFooter, Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const YoutubeCard = ({info} : {info: YoutubeVideo}) => {
  const { snippet, id, } = info;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <>
      <Card
        isFooterBlurred
        isPressable
        onClick={onOpen}
        radius="lg"
        className="border-none"
      >
        <CardBody className='w-full h-full p-0'>
          <Image
            isZoomed
            className="object-cover aspect-square"
            alt={snippet.title}
            src={snippet.thumbnails.high.url}
          />
        </CardBody>
        <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80"> {format(new Date(snippet.publishedAt), 'd MMMM yyyy', { locale: es })} {format(new Date(snippet.publishedAt), 'd MMMM yyyy', { locale: es })}</p>
        </CardFooter>
    </Card>
    <Modal 
      size="5xl" 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="center"
    >
      <ModalContent className="h-3/4">
        <ModalHeader className="text-ellipsis overflow-hidden whitespace-nowrap block">{snippet.title}</ModalHeader>
        <ModalBody>
          <iframe className="aspect-auto w-full h-full" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </ModalBody>
      </ModalContent>
      </Modal>
    </>
  );
}
 
export default YoutubeCard;