import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const PrivateRoute: React.FC<Props> = ({children}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/' />
    }

    return children
}   

export default PrivateRoute