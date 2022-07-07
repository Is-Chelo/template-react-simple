import React from "react";
import { Route, Routes } from "react-router-dom";
import Agregar from "./Agregar";
import List from "./List";
import Update from "./Update";
// import { Route, Routes } from "react-router-dom";
// import List from "./list";

const MateriaRoutes = () => {
  return (
    <>

      <Routes>
        <Route to="/" index element={<List />} />
        {/* <Route to="/materia/add" exact element={<Update />} /> */}
        <Route path="/:id" element={<Update />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/add" element={<Agregar />} />

        {/* <Route to="/create" index element={<List />} /> */}
        {/* <Route to="/update" index element={<List />} /> */}
      </Routes>

    </>
  );
};

export default MateriaRoutes;
