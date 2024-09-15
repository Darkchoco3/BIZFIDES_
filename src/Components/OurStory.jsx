import { useEffect, useRef } from "react";

const OurStory = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const iframe = videoRef.current;
          const videoSrc = iframe.getAttribute("src");
          iframe.setAttribute("src", `${videoSrc}&autoplay=1`);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="container w-11/12 flex flex-col justify-center py-12 gap-8 md:gap-10 lg:gap-[54px]">
      <div className="flex flex-col gap-[10px] font-inter justify-center items-center">
        <h3 className="text-sm md:text-base lg:text-xl xl:text-lg text-primary text-center font-medium">
          OUR STORY
        </h3>
        <h2 className="font-roboto font-bold text-primary text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] 2xl:text-3xl text-center">
          Start-Up Journey
        </h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-grey-300 text-center max-w-[70ch]">
          Take a look at our transformative process of turning an idea into a thriving business through innovation, persistence, teamwork, and strategic growth.
        </p>
      </div>
      <div className="video-responsive">
        <iframe
          ref={videoRef}
          className="w-full rounded-sm h-[496px]"
          src="https://www.youtube.com/embed/pbNVCBOjvsM?rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default OurStory;
