import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Topbar />
//         <div className="container">
//           <Sidebar />

//           <Route path="/" element={<Home />} />
//           {/* <Route path="/users">
//           <UserList />
//         </Route>
//         <Route path="/user/:userId">
//           <User />
//         </Route>
//         <Route path="/newUser">
//           <NewUser />
//         </Route>
//         <Route path="/products">
//           <ProductList />
//         </Route>
//         <Route path="/product/:productId">
//           <Product />
//         </Route>
//         <Route path="/newproduct">
//           <NewProduct />
//         </Route> */}
//         </div>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import MateriaRoutes from "./pages/materias/MateriaRoutes";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Update from "./pages/materias/Update";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="row m-0 p-0">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materias/*" element={<MateriaRoutes />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>

    </>
  );
};

export default App;
