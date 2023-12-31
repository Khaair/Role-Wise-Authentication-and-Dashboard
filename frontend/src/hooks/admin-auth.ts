import { useSelector } from "react-redux";
export default function adminAuth() {
    const tokenData = useSelector((state) => state?.auth?.tokenData);

    if (tokenData?.roles?.join("").toString() === "ROLE_ADMIN") {
        return true;
    } else {
        return false;
    }
}
