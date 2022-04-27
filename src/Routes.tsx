import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<SearchPage />} />
         <Route path="register" element={<SearchResultPage />} />
         <Route path="home" element={<CarDetailPage />} />
         <Route path="admin" element={<CarDetailPage />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}