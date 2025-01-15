import React from "react";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-full">
      <img
        src="/orbital.png"
        alt="homepage background"
        className="absolute w-full h-full object-contain pointer-events-none opacity-5"
      />
      {/* left */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent mb-[30px]">
          LAMA AI
        </h1>
        <h2 className="text-2xl font-bold mb-[10px]">
          Supercharge your creativity and productivity
        </h2>
        <h3 className="font-bold max-w-[70%] mb-[30px]">
          Lorem ipsum dolor sit, amet consectetur adipisicning elit. Pleacat
          sint dolorem doloribus, architueo dolor.
        </h3>
        <Link
          className="px-[25px] py-[15px] bg-sky-500 rounded-lg hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
          to="/dashboard"
        >
          Get Started
        </Link>
      </div>
      {/* right */}
      <div className="w-1/2 z-10 flex justify-center items-center">
        <div className="relative flex items-center justify-center bg-dark rounded-[20px] w-[80%] h-1/2">
          {/* bot bg container */}
          <div className="absolute w-full h-full overflow-hidden">
            <div className="bg-[url(/bg.png)] opacity-20 w-[200%] h-full animate-slide-bg-ease-in-out" />
          </div>
          {/* bot image */}
          <img
            className="w-full h-full object-contain  animate-bot-ease-in-out"
            src="/bot.png"
            alt="big bot"
          />
          {/* type animation */}
          <div className="flex items-center gap-[10px] absolute bottom-[-30px] right-[-50px] bg-[#2c2937] p-[20px] rounded-lg">
            <img
              src="/bot.png"
              width={32}
              alt="bot"
              className="w-[32px] h-[32px] object-cover rounded-full"
            />
            <TypeAnimation
              style={{ fontSize: "20px" }}
              sequence={[
                "Hello, I'm LAMA AI",
                1000,
                "I'm here to help you",
                1000,
                "I can help you with your tasks",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
