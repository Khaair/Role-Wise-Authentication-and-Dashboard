import Login from "../components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/signup";
import PrivateRoute from "../auth/private-route";
import UserManagement from "../components/user-management";
import Admin from "../pages/admin";
import Hr from "../pages/hr";
import Users from "../pages/users";
import Dashboard from "../components/dashboard";
import AdminRoute from "../auth/admin-route";
import HrRoute from "../auth/hr-route";
import UserRoute from "../auth/user-route";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Routes>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/hr"
          element={
            <HrRoute>
              <Hr />
            </HrRoute>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/users"
          element={
            <UserRoute>
              <Users />
            </UserRoute>
          }
        />
      </Routes>

      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>

      <Routes>
        <Route
          path="/add-user"
          element={
            <PrivateRoute>
              <UserManagement />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
