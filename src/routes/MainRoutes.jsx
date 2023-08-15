import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Signin } from "../pages/Signin"
import { Navbar } from "../componentes/Navbar/Navbar"

export const MainRoutes = () => {
  return (
    <div className="container">
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signin' element={<Signin/>}/>
      
    </Routes>
    </div>
  )
}
