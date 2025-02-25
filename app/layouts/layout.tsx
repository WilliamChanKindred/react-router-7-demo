import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <ul>
      <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"client"}>Client-side rendering</NavLink></li>
        <li><NavLink to={"server"}>Server-side rendering</NavLink></li>
        <li><NavLink to={"clientserver"}>Server-side then Client-side rendering</NavLink></li>
        <li><NavLink to={"static"}>Static pre-rendering</NavLink></li>
      </ul>
      <Outlet />
    </>
  );
}