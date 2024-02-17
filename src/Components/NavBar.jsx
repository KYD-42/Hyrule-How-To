import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <section className="navBar">
      <NavLink to="/">
        <img src="src/assets/logo-w.svg" height={80} />
      </NavLink>
      <section className="navLinks">
        <p>About</p>
        <p>Home</p>
        <p>Not Found</p>
      </section>
    </section>
  );
}

export default NavBar;