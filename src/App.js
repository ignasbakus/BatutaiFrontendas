import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./pages/contacts/Contact";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <>
      <NavBar
        brand="Batutų nuoma"
        reservation="Rezervacija"
        items="Batutai"
        contacts="Kontaktai"
        login="Prisijungti"
        home="Pagrindinis"
        dropdownValue1="Kažkas"
        dropdownValue2="Kažkas"
        dropdownValue3="Kažkas"
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
