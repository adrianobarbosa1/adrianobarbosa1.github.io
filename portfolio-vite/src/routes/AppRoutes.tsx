// import { LogoutRoundedIcon } from "@mui/icons-material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Perfil from "../pages/Perfil";
import Portfolio from "../pages/Portfolio";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {/* <Route index element={<Navigate to="/" />} /> */}
          <Route path="/*" element={<Perfil />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
