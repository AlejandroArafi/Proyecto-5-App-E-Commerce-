import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Signin } from "../pages/Signin";
import { Navbar } from "../componentes/Navbar/Navbar";
// import { Footer } from "../componentes/footer/Footer";
import { ContactPage } from "../pages/ContactPage";
import { ProductsPage } from "../pages/ProductsPage";
import { Search } from "../componentes/searchButton/Search";
import './MainRoutes.css'
import { DiSanti } from "../componentes/diSanti/DiSanti";
import { Navicon } from "../componentes/navicon/Navicon";

export const MainRoutes = () => {
  return (
    <div>
      <div className="navs">
      <Search />
      <Navicon/>
      </div>
      
      <DiSanti/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="contacto" element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
