import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon, LanguageIcon } from "./Icons";
import Logo from "../assets/LogoDefault.png";
import AuthModal from "./AuthModal";

const links = [
  { page: "Home", route: "/" },
  { page: "Planning Tools", route: "" },
  { page: "Venues", route: "/venues" },
  { page: "Vendors", route: "" },
  { page: "Inspiration", route: "" },
  { page: "About Us", route: "" },
];

function Navbar() {
  const location = useLocation().pathname;
  const activeLink = "underline";
  function showRegisterModal() {
    const registerModal = document.querySelector("#registerModal");
    registerModal.classList.remove("hidden");
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white dark:bg-white">
      <div className="mx-auto flex items-center justify-between px-10 py-2 lg:justify-around">
        <button className="md:hidden">
          <HamburgerIcon />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-14" />
        </Link>
        <button className="md:hidden">
          <LanguageIcon />
        </button>
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-white">
            <div className="flex gap-10">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.route}
                    className={`text-lg text-[#6E7C99] underline-offset-8 hover:underline ${
                      location === link.route ? activeLink : ""
                    }`}
                  >
                    {link.page}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div
          id="registerModal"
          className="fixed left-0 top-0 hidden min-w-full"
        >
          <AuthModal />
        </div>

        <div className="hidden bg-white lg:flex lg:gap-4">
          <button type="button" className="btnSolid btnNavSolid w-40 py-2">
            Sign Up
          </button>
          <button
            type="button"
            className="btnOutline w-40 py-2"
            onClick={showRegisterModal}
          >
            Log In
          </button>
          {/* <div id="loginModal">
            <AuthModal modalType="login" />
          </div> */}
          {/* <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
