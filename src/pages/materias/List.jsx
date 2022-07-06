import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Peticion from "../../helpers/Peticiones";

const List = () => {
  const [data, setData] = useState();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  let datos = new Peticion("/materias").getData();
  datos = !!datos && datos.response;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="productTitleContainer">
        <h1 className="productTitle">Lista de Materias</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      {/* Listamos las materias */}
      <div className="productList">
        {!!datos && (
          <DataGrid
            rows={[
              {
                id: 1,
                name: "Apple Airpods",
                img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                stock: 123,
                status: "active",
                price: "$120.00",
              },
              {
                id: 2,
                name: "Apple Airpods",
                img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                stock: 123,
                status: "active",
                price: "$120.00",
              },
            ]}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          ></DataGrid>
        )}
      </div>
    </>
  );
};

export default List;
