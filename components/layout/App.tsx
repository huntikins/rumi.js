import { Fragment } from "react";
import Link from "next/link";

const App: React.FC = ({children}) => {
  return (
    <Fragment>
      <header className="fixed w-full top-0 h-10">
        <nav className="p-4 flex justify-center items-center bg-indigo-600">
          <Link href="/">
            <a className="text-center text-white decoration-none text-sans text-3xl">rumi.js</a>
          </Link>
        </nav>
      </header>
      <main className="pt-20 h-screen">
        {children}
      </main>
    </Fragment>
  );
}

export default App