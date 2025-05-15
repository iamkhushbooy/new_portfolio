'use client'
import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    'TypeScript', 'JavaScript', 'Java', 'Next.js', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Tailwind CSS', 'Git & GitHub', 'NodeMailer', 'Vercel'
  ];

  return (
    <div
      id="about"
      className="min-h-screen px-6 py-12 bg-gradient-to-br
      from-blue-50 to-white text-[rgb(59,144,197)] scroll-mt-16 pt-10
      md:pt-5">
      <div className="max-w-5xl mx-auto">
        <section className="mb-20">
          <h2
            className=" text-xl text-[rgb(59,144,197)]
            uppercase font-semibold mb-6 tracking-widest text-center
             md:text-2xl md:text-[rgb(59,144,197)]">
            My Journey
          </h2>

          <div className="space-y-6 border-l-4 border-[rgb(59,144,197)] pl-6 text-[14px]
           md:text-[18px]">
            {[
              {
                title: "Full-Stack Developer",
                desc: "Developed dynamic and scalable web applications using Next.js and MongoDB, with a focus on clean UI and smooth user experience."
              },
              {
                title: 'Database Integration',
                desc: "Worked with MongoDB for data modeling and seamless backend integration."
              },
              {
                title: "Email Automation",
                desc: "Used NodeMailer to handle form submissions and send automated emails."
              },
              {
                title: 'Debugging',
                desc: "Comfortable with resolving issues efficiently, often using AI tools to assist."
              },
              {
                title: 'Version Control',
                desc: "Proficient in Git and GitHub for project tracking and collaboration."
              },
              {
                title: 'UI Development',
                desc: "Build responsive and clean interfaces using Tailwind CSS."
              },
              {
                title: 'Deployment',
                desc: "Experience deploying projects using Vercel for fast, scalable hosting."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STACK & TOOLS */}
        <section>
          <h2 className="text-xl text-[rgb(59,144,197)] uppercase 
      font-semibold mb-6 tracking-widest text-center
      md:text-2xl">My Tech Stack</h2>
          <p className="w-[80%] ml-[10%] text-center font-light text-lg mb-8 text-[16px]
          md:text-[18px]">
            Tools and technologies I’m comfortable with, and enjoy using:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {techStack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition text-[rgb(59,144,197)] font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
