import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import img from "../../public/profile_pic.jpg";

export default function Main() {
  return (
    <Fragment>
      <header className="relative animate-fade-in">
        <nav className="absolute top-0 right-0 px-4 py-4 flex items-center">
            {/* TODO: only show if logged in */}
            <Link href="/profile">  
              <a className="sm:w-auto w-full flex justify-between items-center bg-white border-indigo-600 text-indigo-600 transition-all border-2 p-2 rounded-sm hover:bg-indigo-600 hover:text-white">
                <span className="text-xl px-3">Player 1</span>
                <Image 
                    src={img}
                    alt="Player 1 profile image"
                    height="50"
                    width="50"
                    className="rounded-sm"/>
              </a>
            </Link>
        </nav>
      </header>
      <main className="h-screen flex justify-center items-center animate-fade-in">
        <section>
          <div>
            <h1 className="font-sans text-7xl md:text-9xl text-indigo-600">
              rumi.js
            </h1>
          </div>
          <div className="py-5">
            {/* TODO: only show if logged in */}
            <ul className="list-none m-0 p-0 flex flex-col justify-center items-center">
              <li>
                <Link href="/new-game">
                  <a className="block transition-all border-2 border-indigo-600 bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-4 text-white my-2">
                    New Game
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/new-game">
                  <a className="block transition-all border-2 border-indigo-600 hover:bg-indigo-600 py-2 px-4 text-indigo-600 hover:text-white my-2">
                    Join Game
                  </a>
                </Link>
              </li>
            </ul>
            {/* TODO: create sign-in/sign-up buttons */}
          </div>
        </section>
      </main>
      <footer className="relative animate-fade-in">
        <nav className="absolute bottom-0 left-5 right-5 p-4">
          <p className="text-center text-indigo-600">version 1.0.0</p>
        </nav>
        <nav className="absolute right-0 bottom-0 p-4">
            <a href="https://github.com/huntertrammell/rumi.js" target="_blank" rel="noreferrer">
                <svg className="fill-indigo-600 hover:fill-black h-10 w-10 transition-all" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
        </nav>
      </footer>
    </Fragment>
  );
}