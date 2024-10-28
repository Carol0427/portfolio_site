"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { SocialIcon } from 'react-social-icons'
import Typewriter from 'react-typewriter-effect';


function Hero() {
  const LIhandleClick = () => {
    window.open('https://www.linkedin.com/in/carolina-campos04', '_blank');
  }
  const GhandleClick = () => {
    window.open('https://www.github.com/Carol0427', '_blank');
  }
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
  <div className="row-start-2 lg:row-auto">
    {/* <Typography
      variant="h1"
      color="blue-gray"
      className="mb-4 lg:text-5xl !leading-tight text-3xl"
    > */}
      {/* <Typewriter
          text="Hello, I'm Carolina Campos!"
          speed={100} // Typing speed
          cursorColor="#000" // Color of the cursor
        /> */}
    {/* </Typography> */}
    <Typography variant="h1" color="blue-gray"
      className="mb-4 lg:text-5xl !leading-tight text-3xl">
      <Typewriter
        text="Hello, I'm Carolina Campos!"
        typeSpeed={100} // Speed of typing
        cursorColor="#000" // Color of the cursor
        onTypingDone={() => console.log('Typing finished')} // Optional callback
      />
    </Typography>
    <Typography
      variant="lead"
      className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
    >
      software engineer
    </Typography>

    <div className="flex space-x-4 m-2"> {/* Use flex to arrange them in a row */}
            <SocialIcon network="linkedin" onClick={LIhandleClick} />
            <SocialIcon network="github" onClick={GhandleClick} />
            <a href="https://carolina-campos-resume.tiiny.site/" target="_blank">
  <div className="flex items-center justify-center w-12 h-12 bg-[#ffafcc] rounded-full">
    <img src="/image/cv.png" alt="CV Icon" width="10" height="10" className="w-4/6 h-4/6 object-cover" />
  </div>
</a>         
 </div>
  </div>
  <Image
    width={800}
    height={800}
    alt="team work"
    src="/image/new_pfp.svg"
    className="h-[36rem] w-full rounded-xl object-cover"
  />
</div>
    </header>
  );
}

export default Hero;
