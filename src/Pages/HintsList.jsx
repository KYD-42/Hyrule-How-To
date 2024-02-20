import Hints from "../Components/Hints";
import { Link } from "react-router-dom";
function HintsList() {
  return (
    <section>
      <h1 className="title">Hints</h1>
      <div className="addButton-container">
      <Link to="/add-hints" > <button className="addButton" type="submit">Add your own Hint!</button></Link>
      </div>
      <Hints />
    </section>
  );
}
export default HintsList;