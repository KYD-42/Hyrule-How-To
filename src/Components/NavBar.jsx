import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section className="navBar">
      <NavLink to="/">
        <img type="image/svg+xml" src="/src/assets/logotype-dark.svg" height={50} alt="Logo" />
      </NavLink>
      <section className="navLinks">
        <NavLink to="/">
        <button className="button">Home</button>
        </NavLink>
        <NavLink to="/about">
        <button className="button">About</button>
        </NavLink>
        <NavLink to="/add-hints">
        <button className="button">Create</button>
        </NavLink>
      </section>
    </section>
  );
}

export default NavBar;