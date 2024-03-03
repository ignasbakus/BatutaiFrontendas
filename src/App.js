import React from "react";
import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <NavigationBar
        brand="Batutų nuoma"
        reservation="Rezervacija"
        items="Batutai"
        contacts="Kontaktai"
        login="Prisijungti"
        home="Pagrindinis"
        dropdownValue1="Batutai"
        dropdownValue2="Kažkas"
        dropdownValue3="Kažkas"
      />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
