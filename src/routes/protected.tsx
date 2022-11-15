import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from './history';
import { useTypedSelector } from '../hooks/useTypeSelector';
export { PrivateRoute };

function PrivateRoute({ children }) {
    const { user: authUser } = useTypedSelector((x:any) => x.auths);
    
    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/signin" state={{ from: history.location }} />
    }

    // authorized so return child components
    return children;
}