import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export const Signin = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setformData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h2 className="creat-account">Crea tu cuenta</h2>
      <div className="sign-form-container">
        <form className="sign-form" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingresa tu usuario
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ingresa tu usuario"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingresa tu correo
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="correo electronico"
            />
            <div id="emailHelp" className="form-text">
              ll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="ingresa una contraseña"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirma tu contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="confirma tu contraseña"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Recordarme
            </label>
          </div>

          <button type="submit" className="btn btn-primary centered-btn">
            Crear cuenta
          </button>
        </form>
      </div>
      <div className="parrafo">
        <p>
          ¿Ya tienes una cuenta?, <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </>
  );
};
