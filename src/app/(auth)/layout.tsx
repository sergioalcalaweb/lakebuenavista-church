import Image from "next/image"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Image
        alt="biblia"
        src="/image/biblia.jpeg"
        quality={90}
        fill
        loading="eager"
        priority={true}
        className="absolute inset-0"
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      {children}
    </div>

  )
}