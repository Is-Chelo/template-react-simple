import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
// import { Route, Routes } from "react-router-dom";
// import List from "./list";

const MateriaRoutes = () => {
  return (
    <>
      <div className="home">
        <div className="my-card">
          <Routes>
            <Route to="/" index element={<List />} />
            {/* <Route to="/create" index element={<List />} /> */}
            {/* <Route to="/update" index element={<List />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MateriaRoutes;
