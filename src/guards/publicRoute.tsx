import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const PublicRoute: React.FC<Props> = ({children}) => {
    const token = localStorage.getItem('token');

    if (token) {
        return <Navigate to='/app' />
    }

    return children
}   

export default PublicRoute