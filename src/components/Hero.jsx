import React from "react";

import { logo } from "../assets";
import Nav from "./Nav";


const Hero = () => {
  return (
    <header className='w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
      <br/>
      <Nav />
      <br/>
      <br/>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <br/>
    </header>
  );
};

export default Hero;
