const Announcement = () => {
  return (
    <video
      className="w-full h-screen/2 md:h-screen object-cover md:object-fill"
      autoPlay
      muted
      controls
      loop
    >
      <source
        src="https://res.cloudinary.com/dseqdhfur/video/upload/v1700011783/VIDEO-2023-11-10-10-49-43_vigilb.webm"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  )
}

export default Announcement
