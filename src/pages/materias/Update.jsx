import { Formik, Field, Form } from "formik";
import React from "react";
import Peticion from "../../helpers/Peticiones";
import { useLocation, useNavigate } from "react-router-dom";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required(" El nombre es Requerido"),
  sigla: Yup.string().required("La sigla es Requerdia"),
});

const Update = () => {
  const url = useLocation();
  const id = url.pathname.split("/").pop();
  let data = new Peticion(`/materias/${id}`).getDataId();
  data = !!data && data.response;
  const navigate = useNavigate();

  const handleEnviar = (values) => {
    new Peticion(`/materias`).updateItem(data, values);
    navigate(-1);
  };

  return (
    <>
      {data ? (
        <div className="contenedor">
          <h3 className="titulo">Actualizar Materia</h3>
          <hr />
          <div className="medio">
            <div className="my-card-form">
              <Formik
                initialValues={{
                  nombre: data.nombre,
                  sigla: data.sigla,
                  estado: data.estado,
                }}
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

                    <Field
                      type="nombre"
                      className="form-control"
                      name="nombre"
                    />
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
      ) : (
        <div>Cargando..</div>
      )}
    </>
  );
};

export default Update;
