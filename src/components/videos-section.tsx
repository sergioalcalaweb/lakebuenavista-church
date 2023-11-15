import { getChannelInfo } from "@/utils/youtube"
import YoutubeCard from "./youtube-card"

const VideosSection = async () => {
  const { videos } = await getChannelInfo()
  return (
    <>
      <header className="pb-4">
        <h2 className="title">Videoteca Inspiradora</h2>
        <p>
          Explora la Fe Adventista: Encuentra Inspiración en Nuestros Videos
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6 z-4">
        {videos.map((video) => (
          <YoutubeCard info={video} key={video.etag} />
        ))}
      </div>
    </>
  )
}

export default VideosSection
