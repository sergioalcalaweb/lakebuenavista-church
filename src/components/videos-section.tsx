import { getChannelInfo } from "@/utils/youtube"
import YoutubeCard from "./youtube-card"

const VideosSection = async () => {
  const { videos, conference, concerts } = await getChannelInfo()
  return (
    <>
      <h2 className="title pb-4 sticky top-16 bg-slate-100 z-10">Sermones</h2>
      <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {videos.map((video) => (
          <YoutubeCard info={video} key={video.etag} />
        ))}
      </div>
      <h2 className="title pb-4 sticky top-16 bg-slate-100 z-20">
        Conferencias
      </h2>
      <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {conference.map((video) => (
          <YoutubeCard info={video} key={video.etag} />
        ))}
      </div>
      <h2 className="title pb-4 sticky top-16 bg-slate-100 z-30">Conciertos</h2>
      <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {concerts.map((video) => (
          <YoutubeCard info={video} key={video.etag} />
        ))}
      </div>
    </>
  )
}

export default VideosSection
