import React from 'react'
import PropTypes from "prop-types"
import { Route, Redirect } from 'react-router-dom'

const Private = ({ component: Component }) => {
    let accessToken = localStorage.getItem('access_token');

    return <Route
        render={() => accessToken ? (
            <Component />
        ) : (
                <Redirect to={{
                    pathname: "/",
                }} />
            )}
    />
}

Private.propTypes = {
    component: PropTypes.any
}

export default Private
