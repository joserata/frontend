import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentacion from "./pages/Documentacion";
import Normatividad from "./pages/Normatividad";
import Eventos from "./pages/Eventos";
import Definiciones from "./pages/Definiciones";
import Layout from "./components/Layout"; // Importa el Layout

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentacion" element={<Documentacion />} />
          <Route path="/normatividad" element={<Normatividad />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/definiciones" element={<Definiciones />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;