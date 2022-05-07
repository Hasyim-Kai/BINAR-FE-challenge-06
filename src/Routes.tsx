import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<RegisterPage />} />
         <Route path="login" element={<LoginPage />} />
         <Route path="home" element={<HomePage />} />
         <Route path="admin" element={<DashboardPage />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}