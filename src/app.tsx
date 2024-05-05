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
        <div className="flex flex-col overflow-x-clip lg:items-center">
          <div className="flex flex-col gap-36 px-4 pb-20 pt-20 md:flex-row-reverse md:justify-between">
            <div className="flex flex-col w-[500px] lg:w-[450px]">
              <img src={VetorHome} alt="VetorHome" />
            </div>
            <div className="flex flex-col gap-7">
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
        <div className="flex flex-col h-px bg-slate-700 mx-auto max-w-4xl my-12 space-y-6 px-5"></div>
        <div className="flex flex-col overflow-x-clip gap-36 pb-20 pt-10 max-w-auto px-[5%]">
          <div className="flex flex-col md:justify-between px-60">
            <h1 className="font-black text-cyan-400 text-5xl px-20">
              Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[380px] gap-6 pt-20 px-20">
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
              <div className="rounded-md outline-none flex flex-col bg-slate-700 p-5 gap-3 text-left"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-px bg-slate-700 mx-auto max-w-4xl my-12 space-y-6 px-5"></div>
        <div className="flex flex-col overflow-x-clip gap-36 pb-20 pt-10 max-w-auto px-[5%]">
          <div className="flex flex-col md:justify-between px-60">
            <h1 className="font-black text-cyan-400 text-5xl px-20">
              About me
            </h1>
            <div className="flex flex-col gap-7 px-20 md:justify-between">
              <div className="flex flex-col rounded-md h-3 bg-cyan-400 max-w-[20rem] mt-20"></div>
              <div className="flex justify-between">
                <h1 className="flex flex-col font-medium text-3xl text-cyan-950">
                  My name is Ruan and I'm<br></br>20 years old. About a year
                  ago,
                  <br></br>I started my studies in the<br></br>world of
                  programming and<br></br>
                  immediately fell in love. I work<br></br>as a Graphic Designer
                  and<br></br>
                  Videomaker, and decided to<br></br>migrate to this new field.
                </h1>
                <div className="px-24">
                  <div className="rounded-md border-[2px] flex flex-col border-cyan-400 bg-slate-700 p-44"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-x-clip gap-36 pb-20 pt-10 max-w-auto px-[5%]">
          <div className="flex flex-col md:justify-between px-60">
            <h1 className="font-black text-cyan-400 text-5xl px-20">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
