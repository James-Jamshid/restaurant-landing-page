import React from "react";
import VideoPlayer from "react-video-js-player";
import img1 from "../../assets/img3.webp";
import video from "../../assets/video.mp4";

const VideoPage = () => {
  const videoSrc = video;

  const poster = img1;
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-evenly h-auto w-full pt-10 px-10  bg-[#f5fcf4] ">
      {/* <div className="">
        <VideoPlayer
          className="w-full h-auto  rounded-2xl"
          src={videoSrc}
          poster={poster}
          width="292"
          height="292"
          playbackRates={[0.5, 1, 3.85, 16]}
        />
      </div> */}
      <div className="container border-2 h-60  md:h-[30rem]  w-full mx-auto mt-10 lg:mt-0 lg:ml-5 shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        />{" "}
      </div>
      <div className="flex">
        <img
          className=" rounded-2xl border-2 border-black w-auto duration-75 hover:animate-pulse 	 "
          src={img1}
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoPage;
