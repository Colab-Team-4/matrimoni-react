import { Link } from "react-router-dom";
import handleCloseNavModal from "../App";

export function HomeIcon() {
  return (
    <Link to="/" onClick={handleCloseNavModal}>
      <div className="flex cursor-pointer gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="home">
            <mask
              id="mask0_3585_4597"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3585_4597)">
              <path
                id="home_2"
                d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
                fill="#AD6E7A"
              />
            </g>
          </g>
        </svg>
        <div className="font-lato">Home</div>
      </div>
    </Link>
  );
}

export function AccountCircleIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="account_circle">
          <mask
            id="mask0_3585_4604"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4604)">
            <path
              id="account_circle_2"
              d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Profile</div>
    </div>
  );
}

export function CheckListsIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="checklist">
          <mask
            id="mask0_3585_4613"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4613)">
            <path
              id="checklist_2"
              d="M5.55 19L2 15.45L3.4 14.05L5.525 16.175L9.775 11.925L11.175 13.35L5.55 19ZM5.55 11L2 7.45005L3.4 6.05005L5.525 8.17505L9.775 3.92505L11.175 5.35005L5.55 11ZM13 17V15H22V17H13ZM13 9.00005V7.00005H22V9.00005H13Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Checklists</div>
    </div>
  );
}
export function SeatingArrangementIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="chair_alt">
          <mask
            id="mask0_3585_4641"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4641)">
            <path
              id="chair_alt_2"
              d="M5 21V14C5 13.45 5.19583 12.9792 5.5875 12.5875C5.97917 12.1958 6.45 12 7 12H8V10H7C6.45 10 5.97917 9.80417 5.5875 9.4125C5.19583 9.02083 5 8.55 5 8V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V8C19 8.55 18.8042 9.02083 18.4125 9.4125C18.0208 9.80417 17.55 10 17 10H16V12H17C17.55 12 18.0208 12.1958 18.4125 12.5875C18.8042 12.9792 19 13.45 19 14V21H17V18H7V21H5ZM7 8H17V5H7V8ZM10 12H14V10H10V12ZM7 16H17V14H7V16Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Seating Arangement</div>
    </div>
  );
}
export function TimelineIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="timeline">
          <mask
            id="mask0_3585_4634"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4634)">
            <path
              id="timeline_2"
              d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16C1 15.45 1.19583 14.9792 1.5875 14.5875C1.97917 14.1958 2.45 14 3 14H3.2625C3.3375 14 3.41667 14.0167 3.5 14.05L8.05 9.5C8.01667 9.41667 8 9.3375 8 9.2625V9C8 8.45 8.19583 7.97917 8.5875 7.5875C8.97917 7.19583 9.45 7 10 7C10.55 7 11.0208 7.19583 11.4125 7.5875C11.8042 7.97917 12 8.45 12 9C12 9.03333 11.9833 9.2 11.95 9.5L14.5 12.05C14.5833 12.0167 14.6625 12 14.7375 12H15.2625C15.3375 12 15.4167 12.0167 15.5 12.05L19.05 8.5C19.0167 8.41667 19 8.3375 19 8.2625V8C19 7.45 19.1958 6.97917 19.5875 6.5875C19.9792 6.19583 20.45 6 21 6C21.55 6 22.0208 6.19583 22.4125 6.5875C22.8042 6.97917 23 7.45 23 8C23 8.55 22.8042 9.02083 22.4125 9.4125C22.0208 9.80417 21.55 10 21 10H20.7375C20.6625 10 20.5833 9.98333 20.5 9.95L16.95 13.5C16.9833 13.5833 17 13.6625 17 13.7375V14C17 14.55 16.8042 15.0208 16.4125 15.4125C16.0208 15.8042 15.55 16 15 16C14.45 16 13.9792 15.8042 13.5875 15.4125C13.1958 15.0208 13 14.55 13 14V13.7375C13 13.6625 13.0167 13.5833 13.05 13.5L10.5 10.95C10.4167 10.9833 10.3375 11 10.2625 11H10C9.96667 11 9.8 10.9833 9.5 10.95L4.95 15.5C4.98333 15.5833 5 15.6625 5 15.7375V16C5 16.55 4.80417 17.0208 4.4125 17.4125C4.02083 17.8042 3.55 18 3 18Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Timeline</div>
    </div>
  );
}
export function GuestListIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="diversity_3">
          <mask
            id="mask0_3585_4627"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4627)">
            <path
              id="diversity_3_2"
              d="M1 20V16C1 15.4333 1.19583 14.9583 1.5875 14.575C1.97917 14.1917 2.45 14 3 14H6.275C6.60833 14 6.925 14.0833 7.225 14.25C7.525 14.4167 7.76667 14.6417 7.95 14.925C8.43333 15.575 9.02917 16.0833 9.7375 16.45C10.4458 16.8167 11.2 17 12 17C12.8167 17 13.5792 16.8167 14.2875 16.45C14.9958 16.0833 15.5833 15.575 16.05 14.925C16.2667 14.6417 16.5208 14.4167 16.8125 14.25C17.1042 14.0833 17.4083 14 17.725 14H21C21.5667 14 22.0417 14.1917 22.425 14.575C22.8083 14.9583 23 15.4333 23 16V20H16V17.725C15.4167 18.1417 14.7875 18.4583 14.1125 18.675C13.4375 18.8917 12.7333 19 12 19C11.2833 19 10.5833 18.8875 9.9 18.6625C9.21667 18.4375 8.58333 18.1167 8 17.7V20H1ZM12 16C11.3667 16 10.7667 15.8542 10.2 15.5625C9.63333 15.2708 9.15833 14.8667 8.775 14.35C8.49167 13.9333 8.1375 13.6042 7.7125 13.3625C7.2875 13.1208 6.825 13 6.325 13C6.69167 12.3833 7.46667 11.8958 8.65 11.5375C9.83333 11.1792 10.95 11 12 11C13.05 11 14.1667 11.1792 15.35 11.5375C16.5333 11.8958 17.3083 12.3833 17.675 13C17.1917 13 16.7333 13.1208 16.3 13.3625C15.8667 13.6042 15.5083 13.9333 15.225 14.35C14.8583 14.8833 14.3917 15.2917 13.825 15.575C13.2583 15.8583 12.65 16 12 16ZM4 13C3.16667 13 2.45833 12.7083 1.875 12.125C1.29167 11.5417 1 10.8333 1 10C1 9.15 1.29167 8.4375 1.875 7.8625C2.45833 7.2875 3.16667 7 4 7C4.85 7 5.5625 7.2875 6.1375 7.8625C6.7125 8.4375 7 9.15 7 10C7 10.8333 6.7125 11.5417 6.1375 12.125C5.5625 12.7083 4.85 13 4 13ZM20 13C19.1667 13 18.4583 12.7083 17.875 12.125C17.2917 11.5417 17 10.8333 17 10C17 9.15 17.2917 8.4375 17.875 7.8625C18.4583 7.2875 19.1667 7 20 7C20.85 7 21.5625 7.2875 22.1375 7.8625C22.7125 8.4375 23 9.15 23 10C23 10.8333 22.7125 11.5417 22.1375 12.125C21.5625 12.7083 20.85 13 20 13ZM12 10C11.1667 10 10.4583 9.70833 9.875 9.125C9.29167 8.54167 9 7.83333 9 7C9 6.15 9.29167 5.4375 9.875 4.8625C10.4583 4.2875 11.1667 4 12 4C12.85 4 13.5625 4.2875 14.1375 4.8625C14.7125 5.4375 15 6.15 15 7C15 7.83333 14.7125 8.54167 14.1375 9.125C13.5625 9.70833 12.85 10 12 10Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Guest List</div>
    </div>
  );
}
export function BudgetPlannerIcon() {
  return (
    <Link to="/budgeting" onClick={handleCloseNavModal}>
      <div className="flex cursor-pointer gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="border_color">
            <mask
              id="mask0_3585_4620"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3585_4620)">
              <path
                id="border_color_2"
                d="M2 24V20H22V24H2ZM6 16H7.4L15.2 8.225L13.775 6.8L6 14.6V16ZM4 18V13.75L15.2 2.575C15.3833 2.39167 15.5958 2.25 15.8375 2.15C16.0792 2.05 16.3333 2 16.6 2C16.8667 2 17.125 2.05 17.375 2.15C17.625 2.25 17.85 2.4 18.05 2.6L19.425 4C19.625 4.18333 19.7708 4.4 19.8625 4.65C19.9542 4.9 20 5.15833 20 5.425C20 5.675 19.9542 5.92083 19.8625 6.1625C19.7708 6.40417 19.625 6.625 19.425 6.825L8.25 18H4Z"
                fill="#AD6E7A"
              />
            </g>
          </g>
        </svg>
        <div className="font-lato">Budget Planner</div>
      </div>
    </Link>
  );
}
export function CastleIcon() {
  return (
    <Link to="/venues" onClick={handleCloseNavModal}>
      <div className="flex cursor-pointer gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="castle">
            <mask
              id="mask0_3585_4650"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <rect
                id="Bounding box"
                y="0.00012207"
                width="24"
                height="24"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_3585_4650)">
              <path
                id="castle_2"
                d="M1 21.0001V9.00012H3V11.0001H5V3.00012H7V5.00012H9V3.00012H11V5.00012H13V3.00012H15V5.00012H17V3.00012H19V11.0001H21V9.00012H23V21.0001H14V18.0001C14 17.4501 13.8042 16.9793 13.4125 16.5876C13.0208 16.196 12.55 16.0001 12 16.0001C11.45 16.0001 10.9792 16.196 10.5875 16.5876C10.1958 16.9793 10 17.4501 10 18.0001V21.0001H1ZM3 19.0001H8V18.0001C8 16.9001 8.39167 15.9585 9.175 15.1751C9.95833 14.3918 10.9 14.0001 12 14.0001C13.1 14.0001 14.0417 14.3918 14.825 15.1751C15.6083 15.9585 16 16.9001 16 18.0001V19.0001H21V13.0001H17V7.00012H7V13.0001H3V19.0001ZM9 12.0001H11V9.00012H9V12.0001ZM13 12.0001H15V9.00012H13V12.0001Z"
                fill="#AD6E7A"
              />
            </g>
          </g>
        </svg>
        <div className="font-lato">Find a Venue</div>
      </div>
    </Link>
  );
}
export function ReviewsIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="reviews">
          <mask
            id="mask0_3585_4657"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <rect
              id="Bounding box"
              y="0.00012207"
              width="24"
              height="24"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_3585_4657)">
            <path
              id="reviews_2"
              d="M9.075 14.2501L12 12.4751L14.925 14.2501L14.15 10.9251L16.75 8.67512L13.325 8.40012L12 5.25012L10.675 8.40012L7.25 8.67512L9.85 10.9251L9.075 14.2501ZM2 22.0001V4.00012C2 3.45012 2.19583 2.97929 2.5875 2.58762C2.97917 2.19596 3.45 2.00012 4 2.00012H20C20.55 2.00012 21.0208 2.19596 21.4125 2.58762C21.8042 2.97929 22 3.45012 22 4.00012V16.0001C22 16.5501 21.8042 17.021 21.4125 17.4126C21.0208 17.8043 20.55 18.0001 20 18.0001H6L2 22.0001ZM5.15 16.0001H20V4.00012H4V17.1251L5.15 16.0001Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Venue Review</div>
    </div>
  );
}
export function BeenHereIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="beenhere">
          <mask
            id="mask0_3585_4664"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4664)">
            <path
              id="beenhere_2"
              d="M12 23L4.8 17.6C4.55 17.4167 4.35417 17.1833 4.2125 16.9C4.07083 16.6167 4 16.3167 4 16V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.3167 19.9292 16.6167 19.7875 16.9C19.6458 17.1833 19.45 17.4167 19.2 17.6L12 23ZM12 20.5L18 16V4H6V16L12 20.5ZM10.95 15L16.6 9.35L15.2 7.9L10.95 12.15L8.85 10.05L7.4 11.45L10.95 15Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Venue Booking</div>
    </div>
  );
}
export function CakeIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cake">
          <mask
            id="mask0_3585_4672"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4672)">
            <path
              id="cake_2"
              d="M4 22C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V16C3 15.45 3.19583 14.9792 3.5875 14.5875C3.97917 14.1958 4.45 14 5 14V10C5 9.45 5.19583 8.97917 5.5875 8.5875C5.97917 8.19583 6.45 8 7 8H11V6.55C10.7 6.35 10.4583 6.10833 10.275 5.825C10.0917 5.54167 10 5.2 10 4.8C10 4.55 10.05 4.30417 10.15 4.0625C10.25 3.82083 10.4 3.6 10.6 3.4L12 2L13.4 3.4C13.6 3.6 13.75 3.82083 13.85 4.0625C13.95 4.30417 14 4.55 14 4.8C14 5.2 13.9083 5.54167 13.725 5.825C13.5417 6.10833 13.3 6.35 13 6.55V8H17C17.55 8 18.0208 8.19583 18.4125 8.5875C18.8042 8.97917 19 9.45 19 10V14C19.55 14 20.0208 14.1958 20.4125 14.5875C20.8042 14.9792 21 15.45 21 16V21C21 21.2833 20.9042 21.5208 20.7125 21.7125C20.5208 21.9042 20.2833 22 20 22H4ZM7 14H17V10H7V14ZM5 20H19V16H5V20Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Real Wedding</div>
    </div>
  );
}
export function DarkModeIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="dark_mode">
          <mask
            id="mask0_3585_4679"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4679)">
            <path
              id="dark_mode_2"
              d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9125 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.1208 4.2125 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.7917 11.8792 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0875 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.02083 6.88333 6.2125 8.05C5.40417 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Theme Style</div>
    </div>
  );
}
export function CategoryIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="category">
          <mask
            id="mask0_3585_4686"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4686)">
            <path
              id="category_2"
              d="M6.5 11L12 2L17.5 11H6.5ZM17.5 22C16.25 22 15.1875 21.5625 14.3125 20.6875C13.4375 19.8125 13 18.75 13 17.5C13 16.25 13.4375 15.1875 14.3125 14.3125C15.1875 13.4375 16.25 13 17.5 13C18.75 13 19.8125 13.4375 20.6875 14.3125C21.5625 15.1875 22 16.25 22 17.5C22 18.75 21.5625 19.8125 20.6875 20.6875C19.8125 21.5625 18.75 22 17.5 22ZM3 21.5V13.5H11V21.5H3ZM17.5 20C18.2 20 18.7917 19.7583 19.275 19.275C19.7583 18.7917 20 18.2 20 17.5C20 16.8 19.7583 16.2083 19.275 15.725C18.7917 15.2417 18.2 15 17.5 15C16.8 15 16.2083 15.2417 15.725 15.725C15.2417 16.2083 15 16.8 15 17.5C15 18.2 15.2417 18.7917 15.725 19.275C16.2083 19.7583 16.8 20 17.5 20ZM5 19.5H9V15.5H5V19.5ZM10.05 9H13.95L12 5.85L10.05 9Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">DIY Ideas</div>
    </div>
  );
}
export function TrendingIcon() {
  return (
    <div className="flex cursor-pointer gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="trending_up">
          <mask
            id="mask0_3585_4693"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3585_4693)">
            <path
              id="trending_up_2"
              d="M3.4 18L2 16.6L9.4 9.15L13.4 13.15L18.6 8H16V6H22V12H20V9.4L13.4 16L9.4 12L3.4 18Z"
              fill="#AD6E7A"
            />
          </g>
        </g>
      </svg>
      <div className="font-lato">Trends</div>
    </div>
  );
}

export function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="search">
        <mask
          id="mask0_3585_4587"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3585_4587)">
          <path
            id="search_2"
            d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
            fill="#6E7C99"
          />
        </g>
      </g>
    </svg>
  );
}

export function KeyboardVoiceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="keyboard_voice">
        <mask
          id="mask0_3585_4592"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3585_4592)">
          <path
            id="keyboard_voice_2"
            d="M12 14C11.1667 14 10.4583 13.7083 9.875 13.125C9.29167 12.5417 9 11.8333 9 11V5C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14ZM11 21V17.925C9.26667 17.6917 7.83333 16.9167 6.7 15.6C5.56667 14.2833 5 12.75 5 11H7C7 12.3833 7.4875 13.5625 8.4625 14.5375C9.4375 15.5125 10.6167 16 12 16C13.3833 16 14.5625 15.5125 15.5375 14.5375C16.5125 13.5625 17 12.3833 17 11H19C19 12.75 18.4333 14.2833 17.3 15.6C16.1667 16.9167 14.7333 17.6917 13 17.925V21H11ZM12 12C12.2833 12 12.5208 11.9042 12.7125 11.7125C12.9042 11.5208 13 11.2833 13 11V5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5V11C11 11.2833 11.0958 11.5208 11.2875 11.7125C11.4792 11.9042 11.7167 12 12 12Z"
            fill="#6E7C99"
          />
        </g>
      </g>
    </svg>
  );
}

export function CircleGrayIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon">
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
          fill="#9E9E9E"
        />
      </g>
    </svg>
  );
}
