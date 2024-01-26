  import "./App.css";
  import NavBar from "./NavBar";
  import Contact from "./Contact";
  import { Route, Routes } from "react-router-dom";

  function App() {
    return (
      <>
        <NavBar
          brand="Batutų nuoma"
          items="Batutai"
          dropdownValue1="Visi batutai"
          dropdownValue2="Kažkas"
          dropdownValue3="Kažkas"
          contacts="Kontaktai"
          reservation="Rezervacija"
          home="Pagrindinis"
        />
        <div>
          <Routes>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </div>
      </>
    );
  }

  export default App;
