"use client";

import { SunIcon } from "lucide-react";
import VetorHome from "./assets/VetorHome.png";

export function App() {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="max-w-8xl mx-auto bg-white/20">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <h1 className="text-cyan-950 text-3xl font-regular mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">
                <span className=" text-cyan-400 font-black">{"</"}Ruan</span>
                Perroní
              </h1>
              <div className="relative hidden lg:flex items-center ms-auto">
                <div className="flex items-center gap-10">
                  <nav className="text-sm leading-6 font-semibold text-slate-700">
                    <ul className="flex space-x-8">
                      <li>
                        <a
                          href="https://github.com/RuanPerroni"
                          className="hover:text-cyan-500 dark:hover:text-cyan-500"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/RuanPerroni"
                          className="hover:text-cyan-500 dark:hover:text-cyan-500"
                        >
                          About me
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/RuanPerroni"
                          className="hover:text-cyan-500 dark:hover:text-cyan-500"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="flex items-center border-l border-slate-200 ml-0 pl-10 dark:border-slate-800">
                    <button
                      type="button"
                      className="text-sm leading-6 font-semibold text-slate-700"
                    >
                      EN
                    </button>
                    <button className="ml-6">
                      <SunIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col pt-20 md:px-[5%] lg:max-w-[70rem]">
          <div className="flex flex-col gap-10 px-4 pb-20 justify-center md:flex-row-reverse md:justify-between">
            <div className="flex flex-col w-[750px] lg:w-[622px] pt-10">
              <img src={VetorHome} alt="VetorHome" />
            </div>
            <div className="flex flex-col gap-7 lg:justify-center px-20">
              <h1 className="font-bold text-cyan-950 text-3xl">
                Hi, I’m Ruan Perroní!
              </h1>
              <h1 className="font-black text-cyan-400 text-7xl">Front-end</h1>
              <h1 className="font-black text-cyan-400 text-7xl">Developer.</h1>
              <div className="flex justify-left pt-4">
                <div id="Tecnologies">
                  <div className="flex rounded-xl bg-white/60 px-2 py-4 flex-wrap gap-4 max-w-[25rem]">
                    <h1 className="flex w-full items-center justify-center text-3xl font-bold text-cyan-950">
                      Technologies
                    </h1>
                    <div className="flex w-full justify-between">
                      <div className="border px-2 py-0.5 text-xs font-medium border-transparent flex flex-col rounded-xl bg-transparent h-[80px] w-[80px] items-center justify-center hover:bg-transparent">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="Logo React"
                        />
                        <p className="text-slate-700 text-[15px] pt-2">React</p>
                      </div>
                      <div className="border px-2 py-0.5 text-xs font-medium border-transparent flex flex-col rounded-xl bg-transparent h-[80px] w-[80px] items-center justify-center hover:bg-transparent">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                          alt="Logo TypeScript"
                        />
                        <p className="text-slate-700 text-[15px] pt-2">
                          TypeScript
                        </p>
                      </div>
                      <div className="border px-2 py-0.5 text-xs font-medium border-transparent flex flex-col rounded-xl bg-transparent h-[80px] w-[80px] items-center justify-center hover:bg-transparent">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                          alt="Logo Next.JS"
                        />
                        <p className="text-slate-700 text-[15px] pt-2">
                          Next.JS
                        </p>
                      </div>
                      <div className="border px-2 py-0.5 text-xs font-medium border-transparent flex flex-col rounded-xl bg-transparent h-[80px] w-[80px] items-center justify-center hover:bg-transparent">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          alt="Logo Tailwind"
                        />
                        <p className="text-slate-700 text-[15px] pt-2">
                          Tailwind
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
