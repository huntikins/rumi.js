import Link from "next/link";

function Nav(){
    return (
        <header className="fixed w-full top-0 h-10">
        <nav className="p-4 flex justify-center items-center bg-indigo-600">
          <Link href="/">
            <a className="text-center text-white decoration-none text-sans text-3xl">rumi.js</a>
          </Link>
          <ul className="flex list-none m-0 p-0">
              <li className="p-2">
                <p className="text-center mb-0 text-white">version 1.0.0</p>
              </li>
            </ul>
        </nav>
      </header>
    )
}

export default Nav;