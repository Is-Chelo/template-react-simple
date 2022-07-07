import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Peticion from "../../helpers/Peticiones";
import './materias.css'
const List = () => {
  const [data, setData] = useState();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  let datos = new Peticion("/materias").getData();
  datos = !!datos && datos.response;
  console.log(datos)
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 400 },
    { field: "sigla", headerName: "Sigla", width: 300 },
    {
      field: "estado",
      headerName: "Estado",
      width: 300,
      renderCell: (params) => {
        console.log()
        return params.row.estado ? <span className="spanBack Approved">SI</span> : <span className="spanBack Declined">No</span>
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/materias/` + params.row.id}>
              <button className="btn btn-outline-primary">
                <i class="bi bi-pencil-square"></i>
              </button>
            </Link>

            <button
              className="m-3 btn btn-outline-danger"
              onClick={() => handleDelete(params.row.id)}
            >
              <i class="bi bi-trash"></i>

            </button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="my-card">

        <div className="row mb-3">
          <div className="productTitleContainer">
            <h2 className="productTitle">Lista de Materias</h2>
            <Link to="/materias/add">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="row">
          </div>
        </div>



        {/* Listamos las materias */}
        {!!datos && (
          <DataGrid
            rows={datos}
            style={{ height: '90%' }}
            // disableSelectionOnClick
            columns={columns}
            pageSize={8}
          // checkboxSelection
          ></DataGrid>
        )}
      </div>


    </>
  );
};

export default List;
