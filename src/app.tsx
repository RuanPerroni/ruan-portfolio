"use client";

import { SunIcon } from "lucide-react";

export function App() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto bg-white/20">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <h1 className="text-slate-900 font-regular text-2xl mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">
              <span className=" text-sky-400 font-black">{"</"}Ruan</span>
              Perroní
            </h1>
            <div className="relative hidden lg:flex items-center ms-auto">
              <div className="flex items-center gap-10">
                <nav className="text-sm leading-6 font-semibold text-slate-700">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        href="https://github.com/RuanPerroni"
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/RuanPerroni"
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                      >
                        About me
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/RuanPerroni"
                        className="hover:text-sky-500 dark:hover:text-sky-400"
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
  );
}
