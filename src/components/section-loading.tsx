import { Skeleton } from "@nextui-org/react"

const SectionLoading = () => (
  <div className="bg-white">
    <Skeleton>
      <div className="relative w-screen-xl h-56 lg:h-96 bg-gradient-to-b from-black to-slate-700">
      </div>
    </Skeleton>
    <div className="text-black relative mx-auto h-screen lg:max-w-screen-lg xl:max-w-screen-xl -my-20 lg:-my-40 mb-0 lg:mb-0 bg-slate-100 h-fit shadow rounded-none lg:shadow-lg lg:rounded-lg p-20 flex flex-col gap-5">
      <Skeleton className="w-1/3 rounded-lg">
        <div className="h-5 w-1/3 rounded-lg bg-slate-200"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-5 w-full rounded-lg bg-slate-200"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-5 w-full rounded-lg bg-slate-200"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-5 w-full rounded-lg bg-slate-200"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-5 w-full rounded-lg bg-slate-200"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-5 w-full rounded-lg bg-slate-200"></div>
      </Skeleton>
    </div>
  </div>
)

export default SectionLoading
