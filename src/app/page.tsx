"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Image from 'next/image'
import About from "./(Routes)/about/page";
import Project from './(Routes)/projects/page'
import { motion } from 'framer-motion'
const page = () => {
  const text = "Hello, I'm";
  const highlightWord = "Khushboo";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);
  return (
    <>
      <div id="home" className='w-full min-h-screen
    flex justify-center  items-center '
        style={{
        background: `
      radial-gradient(circle at left top, #d9f1fb 0%, transparent 60%),
      radial-gradient(circle at right bottom, #d9f1fb 0%, white 60%)
    `,
        }}
      >
        {/* Wrapper to align image and text */}
        <div
          className='flex flex-col-reverse md:flex-row justify-center items-center 
          w-full md:w-[60%] gap-10 mb-20'
        >
          {/* Text Section */}
          <div className='text-center md:w-[50%]'>
            <h1 className='text-[20px] font-extralight
            md:text-[22px]'>
              {displayText}
              {index === text.length && (
                <span className="ml-1 text-[24px] font-bold text-[rgb(46,135,190)]
                md:text-[32px]
              ">{highlightWord}</span>
              )}
            </h1>
            <h2 className='text-[20px] font-extralight mt-2
            md:text-[25px]'>
              — a{' '}
              <span className='text-[20px] font-bold text-[rgb(59,144,197)]
              md:text-[25px]'>Next.jsss</span><span className="text-[20px]
              md:text-[22px]"> Developer.</span>
            </h2>
            <p className='font-light mt-4 px-4 text-[16px]
            md:text-[18px]'>
              Final-year B.Tech student passionate about web development.
              I build modern, scalable web apps using
              <span className="font-medium text-gray-700"> Next.js, React.js, and Tailwind CSS</span>.
            </p>
          </div>
          {/* Image and Button Section */}
          <div
            id="image"
            className='flex flex-col justify-around items-center md:w-[50%] h-[380px]
            '
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}>
              <Image
              src={'/image.jpeg'}
              width={250}
              height={250}
              alt={'Profile Image'}
              className='rounded-full md:w-[300px] md:h-[300px]'
              />
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <Project />
    </>
  )
}

export default page