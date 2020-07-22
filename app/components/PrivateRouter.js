import React from 'react'
import { Route } from 'react-router-dom'
import constants from '../const'
import SemAcesso from './SemAcesso'

function PrivateRouter({ component: Component, ...rest }) {


    return (

        <Route
            {...rest}
            render={props => (localStorage.getItem(constants.KEY_CONDO_STORAGE) !== null)
                ? (<Component {...props} />)
                : (<SemAcesso />)

            }

        />
    )

}

export default PrivateRouter