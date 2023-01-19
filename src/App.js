import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import RegisterCompany from "./components/login/companyRegister/RegisterCompany";

import Componies from "./pages/Componies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Componies />} />
      <Route path="/companiesRegister" element={<RegisterCompany />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={r} />
    </div>
  );
}

export default App;
