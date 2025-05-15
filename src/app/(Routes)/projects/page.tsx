import React from 'react';
import Projectprops from './Projectprops';

const Page = () => {
  return (
    <div 
      id="projects" 
      className="w-full min-h-screen scroll-mt-22 px-4 pt-30
      md:pt-0"
    >
      <h2 
        className="text-lg text-gray-700 uppercase 
        font-semibold mb-4 tracking-widest text-center
        md:text-2xl md:text-[rgb(59,144,197)] "
      >
        My Web Projects
      </h2>

      <p 
        className="w-full max-w-xl mx-auto text-center 
        font-light text-sm mb-6 text-gray-700 
        md:text-base"
      >
        Explore my recent web development projects built with modern technologies.
      </p>

      <div 
        className="flex flex-col items-center gap-6  
        md:flex-row md:flex-wrap md:justify-center"
      >
        <Projectprops
          topic="Tech_Bond"
          text="A platform for building personalized portfolio profiles. Users can add skills, projects, and social links to create a unique, shareable portfolio. Designed for ease of use with a clean, responsive interface."
          l="https://tech_bond.vercel.app/"
          a="https://github.com/iamkhushbooy/tech_bond"
        />

        <Projectprops
          topic="Form Builder"
          text="FormBuilder is a user-friendly tool for creating and sharing custom forms, allowing creators to receive responses directly via email."
          l="https://kyformbuilder.vercel.app/"
          a="https://github.com/iamkhushbooy/formbuilder"
        />

        <Projectprops
          topic="Taskify"
          text="I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."
          l="https://kytaskify.vercel.app/"
          a="https://github.com/iamkhushbooy/taskify"
        />

        <Projectprops
          topic="Translator"
          text="Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api."
          l="https://kykitranslate.netlify.app/"
          a="https://github.com/iamkhushbooy/translater"
        />
      </div>
    </div>
  );
};

export default Page;
