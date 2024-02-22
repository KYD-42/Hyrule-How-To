import { Link } from "react-router-dom";

function Home() {
  return (
    <section /* className="homePage" */>
      <div className="hero">
        <img className="logoMain" src="/assets/logo-w.svg" alt="Hyrule How-To"/>
      </div>
      <div className="allCards">
        <Link to="/creatures">
          <button className="introCard">Creatures</button>
        </Link>
        <Link to="/equipment">
        <button className="introCard">Equipment</button>
        </Link>
        <Link to="/monsters">
        <button className="introCard">Monsters</button>
        </Link>
        <Link to="/treasure">
        <button className="introCard">Treasure</button>
        </Link>
        <Link to="/hints">
        <button className="introCard">Hints</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
