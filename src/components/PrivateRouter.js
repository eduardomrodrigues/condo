import React from 'react'
import { Route } from 'react-router-dom'
import SemAcesso from './SemAcesso'
import ModalContext from './ModalContext'
import { isCertifiedValid } from '../services/CertificadoService'


function PrivateRouter({ component: Component, ...rest }) {

    const context = React.useContext(ModalContext)

    const [isValid, setIsValid] = React.useState(false)


    React.useEffect(() => {

        isCertifiedValid().then((result) => {
            
            if (result.status === 200) {
                context.onLoginSuccess()
                setIsValid(true)
            } else {
                setIsValid(false)
                context.onLoginUnsuccess()
            }
        }).catch(() => {
            setIsValid(false)
            context.onLoginUnsuccess()
        })
    }, [context])

    return (
        <Route {...rest} render={props => (isValid === true)
            ? (<Component {...rest} />)
            : (<SemAcesso isValid={isValid} />)

        }

        />
    )
}

export default PrivateRouter