import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="py-2 px-2 fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-xl ">
          <navbar className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 rounded-xl flex items-center justify-between shadow-md">
            <div className="flex gap-x-3 px-5 py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </NavLink>
            </div>
          </navbar>
        </div>
      </header>
    </>
  );
}
