import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import RegisterCompany from "./components/login/companyRegister/RegisterCompany";
import Modal from "./components/login/loginModal/Modal";
 
import RegisterForm from "./components/login/registerForm/RegisterForm"; 
import Componies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Componies />} />
      <Route path="/company/register" element={<RegisterCompany />} />
    </Route>
  )
);
function App() {
  const showLogin = useSelector((state) => state.loginSlice.showLogin);
  const showRegister = useSelector((state) => state.loginSlice.showRegister);

  return (
    <div className="App">
      <RouterProvider router={r} />
      {(showLogin || showRegister) && <Modal />}
    </div>
  );
}

export default App;
