import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" flex justify-center items-center w-[100%] dark:bg-gray-800">
      <header className=" w-full p-4 flex justify-between items-center bg-yellow-600 text-white">
        <div className="container flex justify-between items-center w-screen h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 md:flex">

            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-">
                Home
              </Link>
            </li>

            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-">
                Contact
              </Link>
            </li>

            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/about"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">
                About
              </Link>
            </li>

            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-">
                Blog
              </Link>
            </li>

            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/dashboard"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-">
                DashBoard
              </Link>
            </li>

          </ul>
        </div>
      </header>
    </div>
  );
}
