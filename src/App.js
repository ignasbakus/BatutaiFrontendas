import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header
        brand="Batutų parduotuvė"
        reservation="Rezervacija"
        items="Batutai"
        contacts="Kontaktai"
        dropdownValue1="Visi Batutai"
        dropdownValue2="Priedai"
        dropdownValue3="Kažkas"
      />
    </div>
  );
}

export default App;
