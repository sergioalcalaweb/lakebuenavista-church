const RevivePage = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <video
        className="w-full md:w-2/3 object-cover md:object-fill mx-auto shadow-2xl md:my-10"
        autoPlay
        controls
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dseqdhfur/video/upload/v1702269002/revive_topgkz.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/dseqdhfur/video/upload/v1702269002/revive_topgkz.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default RevivePage
