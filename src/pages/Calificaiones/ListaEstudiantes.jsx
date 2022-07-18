import { DataGrid } from "@material-ui/data-grid";
import { Field } from "formik";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Peticion from "../../helpers/Peticiones";
const ListaEstudiantes = () => {
    const [data, setData] = useState(false);

    const url = useLocation();
    const id = url.pathname.split("/").pop();
    const fullDatos = new Peticion(`/calificaciones?idCurso=${id}`).getData(data);
    const datos = !!fullDatos && fullDatos.estudiante;

    let notas = new Peticion(`/calificaciones/filtro?idCursoMateria=${localStorage.getItem('cursomateria')}`).getData()
    notas = !!notas && Object.values(notas)
    const calificaciones = {
        idEstudiante: '',
        idProfesor: 1,
        idCursoMateria: localStorage.getItem('cursomateria'),
        ser: '',
        saber: '',
        hacer: '',
        decidir: '',
        autoEvaluacion: ''
    }

    const registrar = (data) => {
        console.log(data);
        calificaciones.idEstudiante = data.id
        new Peticion("/calificaciones").createItem(calificaciones);
    }

    const columns = [
        {
            field: "nombre", headerName: "Nombre Completo", width: 300,
            renderCell: (params) => {
                return <span>{params.row.nombre} {params.row.apellidoPaterno} {params.row.apellidoPaterno}</span>
            }
        },
        {
            field: "rude", headerName: "Rude", width: 150,
        },
        {
            field: "ser", headerName: "Ser", width: 150,
            renderCell: (params) => {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i].idEstudiante == params.row.id) {
                        return <input onChange={(e) => {
                            const a = e.target.value
                            calificaciones.ser = a
                        }} type="number" minLength={0} maxLength={100} className="form-control" defaultValue={notas[i].ser} name="ser" />
                    }

                }
                return <input onChange={(e) => {
                    const a = e.target.value
                    calificaciones.ser = a
                }} type="number" minLength={0} maxLength={100} className="form-control" name="ser" />
            }
        },
        {
            field: "saber", headerName: "Saber", width: 150,
            renderCell: (params) => {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i].idEstudiante == params.row.id) {
                        return <input onChange={(e) => {
                            const a = e.target.value
                            calificaciones.ser = a
                        }} type="number" minLength={0} maxLength={100} className="form-control" defaultValue={notas[i].saber} name="ser" />
                    }

                }
                return <input onChange={(e) => {
                    const a = e.target.value
                    calificaciones.saber = a
                }} type="number" minLength={0} maxLength={100} className="form-control" name="saber" />
            }
        },
        {
            field: "decidir", headerName: "Decidir", width: 150,
            renderCell: (params) => {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i].idEstudiante == params.row.id) {
                        return <input onChange={(e) => {
                            const a = e.target.value
                            calificaciones.ser = a
                        }} type="number" minLength={0} maxLength={100} className="form-control" defaultValue={notas[i].decidir} name="ser" />
                    }

                }
                return <input onChange={(e) => {
                    const a = e.target.value
                    calificaciones.decidir = a
                }} type="number" minLength={0} maxLength={100} className="form-control" name="decidir" />
            }
        },

        {
            field: "hacer", headerName: "Hacer", width: 150,
            renderCell: (params) => {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i].idEstudiante == params.row.id) {
                        return <input onChange={(e) => {
                            const a = e.target.value
                            calificaciones.ser = a
                        }} type="number" minLength={0} maxLength={100} className="form-control" defaultValue={notas[i].hacer} name="ser" />
                    }

                }
                return <input onChange={(e) => {
                    const a = e.target.value
                    calificaciones.hacer = a
                }} type="number" minLength={0} maxLength={100} className="form-control" name="hacer" />
            }
        },
        {
            field: "autoEvaluacion", headerName: "Auto Evaluacion", width: 200,
            renderCell: (params) => {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i].idEstudiante == params.row.id) {
                        return <input onChange={(e) => {
                            const a = e.target.value
                            calificaciones.ser = a
                        }} type="number" minLength={0} maxLength={100} className="form-control" defaultValue={notas[i].autoEvaluacion} name="ser" />
                    }

                }
                return <input onChange={(e) => {
                    const a = e.target.value
                    calificaciones.autoEvaluacion = a
                }} type="number" minLength={0} maxLength={100} className="form-control" name="ser" />
            }
        },
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: (params) => {
                return (
                    <>
                        <button className="btn btn-outline-success" onClick={() => registrar(params.row)}>
                            <i className="bi bi-check-circle m-0"></i>
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
                        <h2 className="productTitle">Estudiantes Inscritos</h2>
                        <Link to={`/calificaciones/add/` + id}>
                            <button className="productAddButton">Cancelar</button>
                        </Link>
                    </div>
                    <div className="row">
                    </div>
                </div>


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

export default ListaEstudiantes;
