import React from 'react'
import Projectprops from './Projectprops'
const page = () => {
  return (
    <div 
    id='projects' 
    className='w-full min-h-screen  scroll-mt-22 '>
      <h2 
      className="text-xl text-[rgb(59,144,197)] uppercase 
      font-semibold mb-6 tracking-widest text-center
      md:text-2xl">My Web Projects</h2>
          <p className="w-[80%] ml-[10%] text-center font-light text-lg mb-8 text-[16px]
          md:text-[18px]">
          Explore my recent web development projects built with modern technologies.
          </p>
      <div className='flex justify-center items-center flex-wrap gap-2 text-[14px] md:text-[16px]'> 
        <Projectprops
          topic={'Tech_Bond'}
          text={"A platform for building personalized portfolio profiles. Users can add skills, projects, and social links to create a unique, shareable portfolio. Designed for ease of use with a clean, responsive interface."}
          l={"https://tech_bond.vercel.app/"}
          a={"https://github.com/iamkhushbooy/tech_bond"}
        ></Projectprops>
        <Projectprops
          topic={'Form Builder'}
          text={"FormBuilder is a user-friendly tool for creating and sharing custom forms, allowing creators to receive responses directly via email."}
          l={"https://kyformbuilder.vercel.app/"}
          a={"https://github.com/iamkhushbooy/formbuilder"}
        ></Projectprops>
        <Projectprops
          topic={'Taskify'}
          text={"I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."}
          l={"https://kytaskify.vercel.app/"}
          a={"https://github.com/iamkhushbooy/taskify"}
        ></Projectprops>
        <Projectprops
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
