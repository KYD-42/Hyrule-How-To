import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="homePage">
      {" "}
      {/* to be added in CSS */}
      <h1 className="title">Welcome to Hyrule How·To</h1>
      <div className="allCards">
        <Link className="introCard" to="/creatures">
          <h2>Creatures</h2>
        </Link>
        <Link className="introCard" to="/equipment">
          <h2>Equipment</h2>
        </Link>
        <Link className="introCard" to="/monsters">
          <h2>Monsters</h2>
        </Link>
        <Link className="introCard" to="/treasure">
          <h2>Treasure</h2>
        </Link>
        <Link className="introCard" to="/hints">
          <h2>Hints</h2>
        </Link>
      </div>
    </section>
  );
}

export default Home;
