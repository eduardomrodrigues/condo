import React from 'react'
import { Route } from 'react-router-dom'
import SemAcesso from './SemAcesso'
import ModalContext from './ModalContext'
import { isCertifiedValid } from '../services/CertificadoService'


class PrivateRouter extends React.Component {
    static contextType = ModalContext

    constructor(props) {
        super(props)

        this.state = {
            isValid: false
        }
    }

    componentDidMount() {
        isCertifiedValid().then((result) => {
            if (result.status === 200) {
                // console.log(this.context)
                // this.context.fecharModalLogin()
                this.setState({
                    isValid: true
                })
            } else {
                this.setState({
                    isValid: false
                })
            }
        }).catch((err) => {
            this.setState({
                isValid: false
            })
        })
    }

    render() {
        const { component: Component, ...rest } = this.props
        
        return (
            <Route
                {...rest}
                render={props => (this.state.isValid === true)
                    ? (<Component {...props} />)
                    : (<SemAcesso />)

                }

            />
        )
    }
}

export default PrivateRouter