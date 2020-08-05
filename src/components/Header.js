import React from 'react'
import constants from '../const'
import ModalContext from './ModalContext'
import { Link } from 'react-router-dom'


function Header() {

    const context = React.useContext(ModalContext)

    const [userLogged, setUserLogged] = React.useState(false)

    const handleSairClick = () => {

        setUserLogged({
            userLogged: false
        })

        localStorage.removeItem(constants.KEY_CONDO_STORAGE)
        window.location = '/'

    }

    const handleEntrarClick = () => {

        context.abrirModalLogin()

    }


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
                    {!userLogged ?
                        <input type="button"
                            value="Entrar"
                            className="button button--active"
                            onClick={() => { handleEntrarClick() }}></input>
                        : <input type="button"
                            value="Sair"
                            className="button button--info"
                            onClick={() => { handleSairClick() }}></input>}


                </div>
            </div>

        </React.Fragment>
    )




}

export default Header