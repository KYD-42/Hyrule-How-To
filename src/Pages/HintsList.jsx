import Hints from "../Components/Hints";
import { Link } from "react-router-dom";
function HintsList() {
  return (
    <section>
      <div className="title">Hints</div>
      <div className="addButton-container">
      <Link to="/add-hints" > <button className="addButton" type="submit">Hint-Creator-2000!</button></Link>
      </div>
      <Hints />
    </section>
  );
}
export default HintsList;