import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import CompanyPage from "./components/company/CompanyPage";
import RegisterCompany from "./components/login/companyRegister/RegisterCompany";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./components/JobDetails/JobDetails";
import { Layout } from "./components/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { changeCurrentUser } from "./store/slices/loginSlice";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./styles.scss";
const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/company/:name" element={<CompanyPage />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route
        path="/company/register"
        element={
          <ProtectedRoute>
            <RegisterCompany />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(changeCurrentUser(currentUser));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={r} />
    </div>
  );
}

export default App;
