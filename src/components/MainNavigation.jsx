import { NavLink } from "react-router-dom";
import className from "../shared/styles.module.css";

export default function MainNavigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? className.active : undefined
            }
            to={"/photos"}
          >
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to={"/items"}>Items</NavLink>
        </li>
        <li>
          <NavLink to={"/count"}>Count</NavLink>
        </li>
      </ul>
    </>
  );
}
