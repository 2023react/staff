import { useSelector } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.scss";
import JobDetails from "./components/JobDetails/JobDetails";
import { Layout } from "./components/Layout";
import RegisterCompany from "./components/login/companyRegister/RegisterCompany";
import Modal from "./components/login/loginModal/Modal";
import Componies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/companies" element={<Componies />} />
      <Route path="/company/register" element={<RegisterCompany />} />
    </Route>
  )
);
function App() {
  const showLogin = useSelector((state) => state.loginSlice.showLogin);
  const showRegister = useSelector((state) => state.loginSlice.showRegister);
  const showLoginCompany = useSelector(
    (state) => state.loginSlice.showComponyLogin
  );

  return (
    <div className="App">
      <RouterProvider router={r} />
    </div>
  );
}

export default App;
