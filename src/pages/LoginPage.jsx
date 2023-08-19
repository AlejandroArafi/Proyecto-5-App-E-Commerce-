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
      [e.target.name]: e.target.value
    })
  }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  

  return (
    <>
      <h2 className="login-title">Inicia sesión</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Well never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
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

        <p>
          no tienes una cuenta? <Link to="/signin">crea una aquí</Link>
        </p>
      </form>
    </>
  );
};
