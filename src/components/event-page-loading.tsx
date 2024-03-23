import { Skeleton } from "@nextui-org/react"

const EventPageLoading = () => {
  return (
    <div className="bg-white">
      <Skeleton>
        <div className="w-screen-xl h-56 lg:h-96 bg-slate-700"></div>
      </Skeleton>
      <main className="mx-auto mt-5 flex flex-col gap-4 lg:max-w-screen-lg h-fit pb-4 px-4">
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-5 w-2/5 rounded-lg bg-slate-200"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg mt-5">
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
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-5 w-4/5 rounded-lg bg-slate-200"></div>
        </Skeleton>
      </main>
    </div>
  )
}

export default EventPageLoading
