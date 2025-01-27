import { useTranslation } from "react-i18next"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="h-full">
      <h2 className="flex items-center pb-4 mb-6 text-3xl font-bold border-b-2 text-lightgray border-midgray">
        <Mail className="mr-2" size={28} />
        {t("contact.title").toUpperCase()}
      </h2>

      <div className="p-6 space-y-6 text-lg transition-all duration-300 border rounded-lg shadow-md bg-lightgblue border-midgray hover:shadow-lg">
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <Mail className="flex-shrink-0" size={24} />
            <a
              href="mailto:robsonssdev@gmail.com"
              className="text-xl transition-all duration-300 text-lightgray hover:text-white hover:underline"
            >
              robsonssdev@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4">
            <Linkedin className="flex-shrink-0" size={24} />
            <a
              href="http://linkedin.com/in/robsonossantana/"
              target="_blank"
              rel="noreferrer"
              className="text-xl transition-all duration-300 text-lightgray hover:text-white hover:underline"
            >
              linkedin.com/in/robsonossantana
            </a>
          </li>

          <li className="flex items-center gap-4">
            <Github className="flex-shrink-0" size={24} />
            <a
              href="https://github.com/ROSS1996"
              target="_blank"
              rel="noreferrer"
              className="text-xl transition-all duration-300 text-lightgray hover:text-white hover:underline"
            >
              github.com/ROSS1996
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

