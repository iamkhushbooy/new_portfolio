'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Projectprops = ({
  topic, text, l, a, width = "450px", height = "280px"
}: {
  topic: string, text: string, l: string, a: string, width?: string, height?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }} 
      className="relative shadow-xl hover:shadow-lg rounded-3xl flex flex-col mx-6 p-6 mb-6"
      style={{
        maxWidth: width,
        minHeight: height,
        background: `radial-gradient(circle at left top, #e9f6f7 0%, white 60%)`,
      }}
    >
      <h1 className="text-[20px] font-bold mb-8 text-center text-[rgb(70,130,168)]">
        {topic}
      </h1>
      <p className="text-justify font-light mb-6">
        {text}
      </p>
      <div className="flex mt-auto gap-4 w-[90%] ml-[5%]
        md:w-[60%] md:ml-[20%]">
        <a
          href={l}
          target="_blank"
          className="px-3 py-2 rounded-lg border border-gray-400 hover:bg-pink-500/50 hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href={a}
          target="_blank"
          className="px-2 py-2 rounded-lg border border-gray-400 hover:bg-[rgb(70,130,168)] hover:text-white transition"
        >
          Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default Projectprops;
