import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<LoginPage />} />
         <Route path="register" element={<RegisterPage />} />
         <Route path="home" element={<HomePage />} />
         <Route path="admin" element={<DashboardPage />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}