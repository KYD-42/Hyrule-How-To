import CreatureList from "./CreatureList";
import EquipmentList from "./EquipmentList";
import MonsterList from "./MonsterList";
function Home() {
  return (
    <section className="homePage">
      <CreatureList />
      <EquipmentList />
      <MonsterList />
    </section>
  );
}

export default Home;