import React, {useContext} from 'react';
import {Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contextProviders/auth';

const RouteGuard = ({component: RouteComponent, ...rest}) => {

    const { currentUser } = useContext(AuthContext);
    console.log('ROUTE GUARD', currentUser);

    return(
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};
export default RouteGuard;