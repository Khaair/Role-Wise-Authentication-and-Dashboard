import axios from "axios";
import { useSelector } from "react-redux";
export default function useAuth() {
    const token = useSelector((state) => state?.auth?.token);

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return true;
    } else {
        return false;
    }
}
