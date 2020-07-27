import React from 'react'
import constants from '../const'
import ModalContext from './ModalContext'
import { Link } from 'react-router-dom'


class Header extends React.Component {

    static contextType = ModalContext

    constructor(props) {
        super(props)

        this.state = {
            userLogged: false
        }
        
        this.handleEntrarClick = this.handleEntrarClick.bind(this)
        this.onUserLogin = this.onUserLogin.bind(this)
    }

    handleSairClick() {

        this.setState({
            userLogged: false
        })
        localStorage.removeItem(constants.KEY_CONDO_STORAGE)
        window.location = '/'

    }

    handleEntrarClick(){

        this.context.abrirModalLogin()

    }

    onUserLogin() {

        this.setState({
            userLogged: true
        })

        console.log(this.state.userLogged)
    }

    render() {

        return (

            <React.Fragment>
                <div className='header'>
                    <div className="header-titulo">Up Life Residence</div>
                    <nav className="header-menu">
                        <ul>
                            <li className="header-menu-item">
                                <Link to='/dashboard'>Meu condomínio</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="container-botao">
                        {!this.state.userLogged ?
                            <input type="button"
                                value="Entrar"
                                className="button button--active"
                                onClick={() => { this.handleEntrarClick() }}></input>
                            : <input type="button"
                                value="Sair"
                                className="button button--info"
                                onClick={() => { this.handleSairClick() }}></input>}


                    </div>
                </div>

            </React.Fragment>
        )


    }


}

export default Header