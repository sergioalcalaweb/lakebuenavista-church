"use client"

interface BlogLayoutProps {
  name: string
  image: React.ReactNode
  children: React.ReactNode
}

const BlogLayout = ({ name, image, children }: BlogLayoutProps) => (
  <div className="bg-white">
    <div className="relative w-screen-xl h-56 lg:h-96 bg-gradient-to-b from-black to-slate-700">
      {image}
      <div className="relative mx-auto max-w-screen-xl pt-5 px-6 lg:px-0">
        <label className="text-white text-4xl font-extralight lg:text-5xl">
          {name}
        </label>
      </div>
    </div>
    <div className="text-black relative mx-auto lg:max-w-screen-lg xl:max-w-screen-xl -my-10 lg:-my-20 mb-0 lg:mb-0 bg-slate-100 h-fit shadow rounded-none lg:shadow-lg lg:rounded-lg">
      {children}
    </div>
  </div>
)

export default BlogLayout
