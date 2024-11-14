import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Cafes from "./pages/Cafes";
import Food from "./pages/Food";
import NavBar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={styles.pageContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    paddingTop: "60px", // Ensure content doesn't overlap with the navbar
    minHeight: "100vh", // Full viewport height
    width: "100%", // Full width
    backgroundColor: "#adc2ab",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default App;
