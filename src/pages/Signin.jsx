import { useState } from "react";
import { Link } from "react-router-dom";

export const Signin = () => {


  const initialFormData = {
    username: "",
    email: "",
    password:''

  };

  const [formData, setformData] = useState(initialFormData);

  const handleInputChange = (e) => { 
    setformData({
        ...formData,
        [e.target.name]:e.target.value
    })
   }
   const handleFormSubmit = (e) => { 
        e.preventDefault()
        console.log(formData)
    }

  return (
    <>
      <h2>Crea tu cuenta</h2>
      <form onSubmit={handleFormSubmit}>
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
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
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
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Ya tiene cuenta, <Link to="/login">Inicia sesión</Link>
      </p>
    </>
  );
};
