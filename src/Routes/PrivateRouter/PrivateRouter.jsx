import React, { useContext } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';
import LeftNavigation from '../../Pages/Shared/RightNavigation/RightNavigation';
import RightNavigation from '../../Pages/Shared/LeftNavigation/LeftNavigation';

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {

        return (
            <div>
               
            </div>
        );
    }
};

export default PrivateRouter;