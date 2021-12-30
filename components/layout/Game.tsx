import { Fragment } from "react";
import Link from "next/link";

const Game: React.FC = ({children}) => {
  return (
    <Fragment>
      <header>
        <nav className="p-4 flex justify-between items-center bg-indigo-600">
          <Link href="/">
            <a className="text-center text-white decoration-none text-sans text-3xl">rumi.js</a>
          </Link>
            <ul className="flex list-none m-0 p-0">
              
            </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <nav className="p-4 flex justify-center items-center">
          <p className="text-center text-indigo-600">version 1.0.0</p>
        </nav>
      </footer>
    </Fragment>
  );
}

export default Game