import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Peticion from "../../helpers/Peticiones";
const List = () => {
  const [data, setData] = useState(false);

  const handleDelete = (id) => {
    new Peticion(`/cursos`).deleteItem(id)
    setData(!data)
  };

  let datos = new Peticion("/cursos").getData(data);
  datos = !!datos && datos.response;
  const columns = [
    { field: "nombre", headerName: "Nombre", width: 300 },
    { field: "paralelo", headerName: "Paralelo", width: 300 },
    { field: "nivel", headerName: "Nivel", width: 300 },

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
            <Link to={`/cursos/` + params.row.id}>
              <button className="btn btn-outline-primary">
                <i className="bi bi-pencil-square"></i>
              </button>
            </Link>

            <button
              className="m-3 btn btn-outline-danger"
              onClick={() => handleDelete(params.row.id)}
            >
              <i className="bi bi-trash"></i>

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
            <h2 className="productTitle">Lista de curso</h2>
            <Link to="/cursos/add">
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
