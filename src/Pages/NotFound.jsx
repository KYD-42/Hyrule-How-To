import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="notFoundPage">
      <img style={{width: '40%'}} src="/assets/error.svg" alt="you found a dead link" />
      <div className="title-error">No Link here... <br />he's probably exploring Hyrule!</div>
      <NavLink to="/">
        <button className="button-error">Go back!</button>
      </NavLink>
    </section>
  );
}

export default NotFound;