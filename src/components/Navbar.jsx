import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HamburgerIcon, AccountIcon } from "./Icons";
import Logo from "../assets/LogoDefault.png";
import PlanningTools from "./PlanningTools";
import VenuesDropdown from "./VenuesDropdown";
import BellIcon from "@mui/icons-material/NotificationsNone";
import HeartIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import { userLoggedInTrue, userLoggedInFalse } from "../redux/userIsLoggedIn";
import { useSelector, useDispatch } from "react-redux";

const links = [
  { page: "Home", route: "/" },
  { page: "Planning Tools", route: "/budgeting" },
  { page: "Venues", route: "/venues" },
  { page: "Vendors", route: "" },
  { page: "Inspiration", route: "" },
  { page: "About Us", route: "" },
];

const userOptions = [
  { page: "My Account", route: "/" },
  { page: "My Orders", route: "/" },
  { page: "My Messages", route: "/" },
  { page: "My Wallet", route: "/" },
  { page: "My Wedding", route: "/" },
  { page: "Settings", route: "/" },
];

Navbar.propTypes = {
  handleShowNavModal: PropTypes.func,
  handleRegister: PropTypes.func,
  handleLogin: PropTypes.func,
};
function Navbar({ handleShowNavModal, handleRegister, handleLogin }) {
  const location = useLocation().pathname;
  const activeLink = "underline";

  const [isNavPlanningOpen, setIsNavPlanningOpen] = useState(false);
  const [isNavVenuesOpen, setIsNavVenuesOpen] = useState(false);
  const [isUserIconModalOpen, setIsUserIconModalOpen] = useState(false);
  const [usernameDisplay, setUsernameDisplay] = useState(null);
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.usernameIsLoggedIn);
  const { nameOfUser } = useSelector((state) => state.usernameIsDisplayed);
  console.log(`${isUserLoggedIn} is user logged in?`);

  useEffect(() => {
    const nameDisplay = localStorage.getItem("name");
    if (nameDisplay) {
      setUsernameDisplay(nameDisplay);
      dispatch(userLoggedInTrue());
    }
  }, [usernameDisplay]);

  return (
    <nav className="fixed top-0 z-30 w-11/12 self-center whitespace-nowrap rounded-md border-gray-200 bg-white shadow-md lg:w-full lg:shadow-none">
      <div className="relative flex items-center justify-between px-[5vw] py-4">
        <button className="md:hidden" onClick={handleShowNavModal}>
          <HamburgerIcon />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-48" />
        </Link>
        <button className="md:hidden" onClick={handleLogin}>
          <AccountIcon />
        </button>
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-white">
            <div className="relative flex gap-5">
              {links.map((link, i) => (
                <div
                  className="h-full w-full"
                  key={i}
                  onMouseOver={() => {
                    if (i === 1) {
                      setIsNavPlanningOpen(true);
                      setIsNavVenuesOpen(false);
                    } else if (i === 2) {
                      setIsNavVenuesOpen(true);
                      setIsNavPlanningOpen(false);
                    }
                  }}
                >
                  <li>
                    <Link
                      to={link.route}
                      className={`text-lg font-normal text-[#6E7C99] underline-offset-8 hover:underline ${
                        location === link.route ? activeLink : ""
                      }`}
                    >
                      {link.page}
                    </Link>
                  </li>
                </div>
              ))}
              <div
                onMouseLeave={() => setIsNavPlanningOpen(false)}
                className={`absolute left-14 top-10 ${
                  !isNavPlanningOpen ? "hidden" : ""
                }`}
              >
                <PlanningTools setIsNavPlanningOpen={setIsNavPlanningOpen} />
              </div>
              <div
                onMouseLeave={() => setIsNavVenuesOpen(false)}
                className={`absolute left-48 top-10 ${
                  !isNavVenuesOpen ? "hidden" : ""
                }`}
              >
                <VenuesDropdown />
              </div>
            </div>
          </ul>
        </div>
        {isUserLoggedIn ? (
          <div className="flex w-48 items-center justify-between">
            <div className="flex gap-4">
              <HeartIcon
                style={{ color: "#6E7C99", cursor: "pointer" }}
              ></HeartIcon>
              <BellIcon
                style={{ color: "#6E7C99", cursor: "pointer" }}
              ></BellIcon>
              <ShoppingCartIcon
                style={{ color: "#6E7C99", cursor: "pointer" }}
              ></ShoppingCartIcon>
            </div>
            <div className="relative">
              <div
                onClick={() => {
                  setIsUserIconModalOpen(!isUserIconModalOpen);
                }}
              >
                <UserIcon
                  style={{
                    color: "#6E7C99",
                    cursor: "pointer",
                  }}
                ></UserIcon>
              </div>
              {isUserIconModalOpen ? (
                <div className="absolute right-0 top-10 rounded bg-white shadow-lg">
                  <div className="py-1 pb-4 pl-3 pr-14 font-lato">
                    Hello, {nameOfUser}!
                  </div>
                  <hr />
                  <div className="pt-4">
                    {userOptions.map((userOption, i) => (
                      <div
                        key={i}
                        className="cursor-pointer py-1 pl-3 pr-14 font-lato hover:bg-[#F4E2E6]"
                      >
                        {userOption.page}
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="cursor-pointer py-2 pl-3 pr-14 font-lato duration-300 hover:bg-[#F4E2E6]">
                    Sign Out
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="hidden bg-white lg:flex lg:gap-4">
            <button
              type="button"
              className="btnSolid btnNavSolid mobileText w-24 py-2"
              onClick={handleRegister}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btnOutline mobileText w-24 py-2"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
