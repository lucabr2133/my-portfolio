import { FileUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

import MiImagen from "./assets/myecommerce.png";
import socialImage from "./assets/socialmedia.png";
import { url } from "inspector";

export default function App() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-bold tracking-wide">Luca Brandan</h1>

          <ul className="flex gap-8 text-gray-300 font-medium">
            {["Start", "Projects", "About", "Skills", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth
                duration={600}
                className="cursor-pointer hover:text-amber-300 transition"
              >
                {section}
              </Link>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="start" className="h-screen flex flex-col justify-center items-center text-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-7xl text-amber-400 font-extrabold drop-shadow-xl"
        >
          Luca Brandan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl tracking-wide text-gray-300"
        >
          Fullstack Web Developer
        </motion.h2>

        <div className="flex gap-5 mt-4">
          {[
            { icon: "/linkedin.svg", text: "LinkedIn", url: "https://www.linkedin.com/in/luca-brandan-59b14a2b0/" },
            { icon: "/github.svg", text: "GitHub", url: "https://github.com/lucabr2133" },
          ].map((social) => (
            <motion.a
              key={social.text}
              href={social.url}
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2"
            >
              <img src={social.icon} className="w-6" />
              {social.text}
            </motion.a>
          ))}

          {/* CV */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="flex bg-white/5 px-5 py-2 rounded-xl border border-white/10 items-center gap-2"
          >
            <FileUp />
            C.V
          </motion.button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full max-w-5xl mx-auto py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-extrabold uppercase mb-10 tracking-wider text-center"
        >
          Projects
        </motion.h1>

        <div className="flex flex-col gap-10 items-center justify-center">
          {[
              {
        title: "Game Shop",
        desc: "A full-featured video game eCommerce platform with an admin dashboard, secure Stripe payments, user authentication, product management, and a seamless shopping experience. Built with a focus on performance, clean UI, and modern development practices.",
        img: MiImagen,
        techs: ["Typescript", "React", "NextJs", "Stripe", "SQL","Tailwind"],
        urlCode:'https://github.com/lucabr2133/next-app-ecommerce',
        urlView:'https://next-app-ecommerce-gamma.vercel.app/'
      },

                {
        title: "Social Media",
        desc: "A modern social media app featuring real-time messaging, posts, comments, and follower interactions. Includes Passport authentication, Prisma ORM, and full testing coverage for both frontend and backend to ensure performance and reliability.",
        img: socialImage,
        techs: ["Typescript", "React", "Postgres", "Prisma", "Node", "Express", "Socket.io","Vitest","React-test"],
        urlCode:'https://echo32232.netlify.app/',
        urlView:'https://github.com/lucabr2133/Social-media'
      }
          ].map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:shadow-xl hover:shadow-amber-300/10 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <img
                  className="rounded-2xl w-full md:w-1/2 object-cover shadow-lg"
                  src={project.img}
                />

                <div className="flex flex-col w-full gap-3">
                  <h2 className="text-sm uppercase tracking-wide font-bold text-gray-400">
                    Full Stack
                  </h2>

                  <h3 className="text-3xl font-extrabold text-amber-400 uppercase">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="p-2 bg-amber-600/20 rounded-xl text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4">
                    {[{text:'View',url:project.urlView},{text:'Code',url:project.urlCode}].map((btn) => (
                      <motion.a href={btn.url}
                        key={btn.text}
                        
                        whileHover={{ scale: 1.07 }}
                        className="px-6 py-2 rounded-xl bg-gray-800/40 border border-white/10 text-sm text-gray-100"
                      >
                        {btn.text}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full max-w-5xl mx-auto py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl uppercase font-extrabold mb-10 tracking-wider"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {[
            "html",
            "css",
            "javascript",
            "typescript",
            "react",
            "nextjs",
            "node",
            "express",
          ].map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full p-6 bg-white/5 backdrop-blur-xl flex flex-col justify-center items-center gap-3 border border-white/10 rounded-2xl hover:border-amber-300/30 transition-all"
            >
              <img width={40} src={`/${skill}.svg`} />
              <h2 className="uppercase font-bold tracking-wide">{skill}</h2>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="w-full max-w-3xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10"
        >
          <h1 className="text-4xl text-center font-extrabold uppercase tracking-wider mb-6">
            About Me
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed text-center">
            I’m a Fullstack Developer specialized in React, Next.js and TypeScript.
            <br /><br />
            I love creating clean UIs, smooth interactions, and scalable applications.
            I'm currently studying Systems Engineering and improving my English.
            <br /><br />
            Passionate about tech, problem-solving, and building modern digital experiences.
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="w-full bg-black/40 backdrop-blur-xl border-t border-white/10 py-14 mt-20"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl font-semibold text-gray-200">
            Let’s work together
          </h2>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="mailto:lucab2188@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Mail className="w-6 h-6" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/lucabr2133"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/in/luca-brandan-59b14a2b0/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </main>
  );
}
