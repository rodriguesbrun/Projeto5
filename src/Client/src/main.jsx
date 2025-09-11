import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login/Login.jsx";
import Cadastro from "./Cadastro/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
    {/* <Cadastro /> */}
  </StrictMode>
);
