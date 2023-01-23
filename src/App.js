import { useSelector } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import CompanyPage from "./components/company/CompanyPage";
import { Layout } from "./components/Layout";
import RegisterCompany from "./components/login/companyRegister/RegisterCompany";

import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/company/register" element={<RegisterCompany />} />
      <Route path="/company/:name" element={<CompanyPage />} />
    </Route>
  )
);
function App() {
  const test = useSelector((state) => state.loginSlice);

  return (
    <div className="App">
      <RouterProvider router={r} />
    </div>
  );
}

export default App;
