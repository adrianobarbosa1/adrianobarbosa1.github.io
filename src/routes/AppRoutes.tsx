// import { LogoutRoundedIcon } from "@mui/icons-material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Perfil from "../pages/perfil/Perfil";
import Posts from "../pages/posts/Posts";

export const AppRoutes = () => {
  // const Perfil = lazy(() => import("../pages/perfil/Perfil"));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Posts />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
