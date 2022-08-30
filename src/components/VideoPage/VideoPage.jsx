import React, { useEffect } from "react";
import VideoPlayer from "react-video-js-player";
import img1 from "../../assets/img3.webp";
import video from "../../assets/video.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const videoSrc = video;

  // const poster = img1;
  return (
    <div
      data-aos="zoom-in-right"
      className="flex flex-col lg:flex-row gap-10 items-center justify-evenly h-auto w-full pt-10 px-10  bg-[#f5fcf4] "
    >
      <div className="">
        <VideoPlayer
          className=" w-auto h-auto md:w-auto md:h-auto lg:w-[600px] lg:h-[650px]  rounded-2xl"
          src={videoSrc}
          // poster={poster}
          // width="292"
          // height="292"
          // playbackRates={[0.5, 1, 3.85, 16]}
        />
      </div>
      {/* <div className="container border-2 h-60  md:h-[30rem]  w-full mx-auto mt-10 lg:mt-0 lg:ml-5 shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/watch?v=CZhyrvsWvas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        />{" "}
      </div> */}
      <div className="flex">
        <img
          className=" rounded-2xl border-2 border-black  duration-75 hover:animate-pulse w-auto h-auto md:w-auto md:h-auto lg:w-[600px] lg:h-[650px]  	 "
          src={img1}
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoPage;
