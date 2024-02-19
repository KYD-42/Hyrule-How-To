import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <section className="navBar">
      <NavLink to="/">
        <img src="src/assets/logo-w.svg" height={80} />
      </NavLink>
      <section className="navLinks">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
      </section>
    </section>
  );
}

export default NavBar;
