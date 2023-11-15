import { Outlet, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../selectors/userEmail";

const PrivateRoutes = () => {
    const userEmail = useRecoilValue(userEmailState);

    return userEmail ? <Outlet /> : <Navigate to = '/login' />;
}

export default PrivateRoutes;