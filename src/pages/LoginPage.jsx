import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";

export const LoginPage = () => {
  const initialFormData = {
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
      <h2 className="login-title">Inicie sesión</h2>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleFormSubmit}>

              {/* correo electronico */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="correo electrónico"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

                {/* contraseña */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="contraseña"
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
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <div className="create-count-p">
        <p>
          no tienes una cuenta? <Link to="/signin">crea una aquí</Link>
        </p>
      </div>
    </>
  );
};
