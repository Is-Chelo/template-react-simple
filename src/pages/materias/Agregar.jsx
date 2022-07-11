import { Formik, Form, Field } from "formik";
import React from "react";
import Peticion from "../../helpers/Peticiones";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required(" El nombre es Requerido"),
  sigla: Yup.string().required("La sigla es Requerdia"),
});

const Agregar = () => {
  const navigate = useNavigate();
  const handleEnviar = (values) => {
    new Peticion("/materias").createItem(values);
    navigate(-1);
  };

  return (
    <>
      <div className="contenedor  pr-5">
        <div
          style={{ "padding-right": "100px" }}
          className="d-flex justify-content-between"
        >
          <h3 className="titulo">Agregar Materia</h3>
          <button className="productAddButton" onClick={() => navigate(-1)}>
            Cancelar
          </button>
        </div>

        <hr />

        <div className="medio">
          <div className="my-card-form">
            <Formik
              initialValues={{ nombre: "", sigla: "", estado: "" }}
              validationSchema={SignupSchema}
              onSubmit={(values) => handleEnviar(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-end">
                    <div className="form-check form-switch ">
                      <Field
                        style={{ width: "60px", height: "30px", color: "" }}
                        type="checkbox"
                        className="form-check-input"
                        name="estado"
                      />
                    </div>
                  </div>

                  <label className="form-label">Nombre</label>

                  <Field type="nombre" className="form-control" name="nombre" />
                  {/* {errors.nombre && touched.nombre && errors.nombre} */}
                  {errors.nombre && touched.nombre ? (
                    <div className="error">{errors.nombre}</div>
                  ) : null}

                  <label className="form-label">Sigla</label>
                  <Field type="sigla" className="form-control" name="sigla" />
                  {errors.sigla && touched.sigla ? (
                    <div className="error">{errors.sigla}</div>
                  ) : null}

                  <button
                    type="submit"
                    className="productAddButton btnAgregar"
                    disabled={isSubmitting}
                  >
                    Registrar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agregar;
