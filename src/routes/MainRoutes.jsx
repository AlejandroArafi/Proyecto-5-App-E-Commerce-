import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"

export const MainRoutes = () => {
  return (
    <div className="container">
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
    </div>
  )
}
