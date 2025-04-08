import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
    return(
        <section className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/christianfitaram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-300 hover:text-white transition duration-300" />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/christian-fita-ramirez-98a0882a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-500 hover:text-white transition duration-300" />
          Linkedin
        </a>
      </section>
    )
}