import { SunIcon } from "../SunIcon";

export default function Navbar() {
  return (
    <nav className="col-start-3">

      <ul className="nav-container items-center justify-end gap-x-10 leading-8 mx-4 z-10 pt-6">
        <li className="nav-item underline underline-offset-8"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Gallery</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        <li className="nav-item mx-4 cursor-pointer"><SunIcon /></li>
      </ul>

      <div className="hamburger-container justify-end items-center mx-4 z-10 pt-6">
        <div className="hamburger flex flex-col cursor-pointer">
          <span className="bar m-0"></span>
          <span className="bar m-0"></span>
          <span className="bar m-0"></span>
        </div>
      </div>
    </nav>
  )
}