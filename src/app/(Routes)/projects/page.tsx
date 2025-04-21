import React from 'react'
import Projectprops from './Projectprops'
const page = () => {
  return (
    <div className='w-full min-h-screen 
    '>
       <header className="py-12 px-4 md:px-6 text-center">
        <p className="font-light text-muted-foreground max-w-2xl mx-auto
        md:text-xl font-[cursive] text-gray-800
        ">
        Explore a collection of my recent web development projects, highlighting my skills in various technologies.
        </p>
      </header>
      <div className='flex justify-center items-center flex-wrap'>
      <Projectprops
        // img={'/formbuilder.jpeg'}
          topic={'Tech_Bond'}
          text={"A platform for building personalized portfolio profiles. Users can add skills, projects, and social links to create a unique, shareable portfolio. Designed for ease of use with a clean, responsive interface."}
          l={"https://tech_bond.vercel.app/"}
          a={"https://github.com/iamkhushbooy/tech_bond"}
        ></Projectprops>
        <Projectprops
        // img={'/formbuilder.jpeg'}
          topic={'Form Builder'}
          text={"FormBuilder is a user-friendly tool for creating and sharing custom forms, allowing creators to receive responses directly via email."}
          l={"https://kyformbuilder.vercel.app/"}
          a={"https://github.com/iamkhushbooy/formbuilder"}
        ></Projectprops>
        <Projectprops
        // img={'/todolist.jpeg'}
          topic={'Taskify'}
          text={"I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."}
          l={"https://kytaskify.vercel.app/"}
          a={"https://github.com/iamkhushbooy/taskify"}
        ></Projectprops>
        <Projectprops
        // img={'/translator.jpeg'}
          topic={'Translator'}
          text={"Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api."}
          l={"https://kykitranslate.netlify.app/"}
          a={"https://github.com/iamkhushbooy/translater"}
        ></Projectprops>
      </div>
    </div>
  )
}

export default page