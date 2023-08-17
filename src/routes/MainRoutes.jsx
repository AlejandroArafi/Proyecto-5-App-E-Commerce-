import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Signin } from "../pages/Signin";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Footer } from "../componentes/footer/Footer";
import { ContactPage } from "../pages/ContactPage";
import { ProductsPage } from "../pages/ProductsPage";
import { Search } from "../componentes/searchButton/Search";

export const MainRoutes = () => {
  return (
    <div>
      <Search />
      <h2 className="title">Di Santi</h2>
      <p>Pasión por el vino</p>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
