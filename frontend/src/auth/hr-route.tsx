import { Navigate } from "react-router-dom";
import hrAuth from "../hooks/hr-auth";

export default function HrRoute({ children }: any) {
  const auth = hrAuth();

  return auth ? children : <Navigate to="/login" />;
}
