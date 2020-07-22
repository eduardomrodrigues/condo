import React from 'react'
import Modal from './Modal'
import Login from './Login'
import constants from '../const'



class Header extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            modalOpen: false,
            userLogged: localStorage.getItem(constants.KEY_CONDO_STORAGE) !== null
        }
        this.handleEntrarClick = this.handleEntrarClick.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.onUserLogin = this.onUserLogin.bind(this)
        this.modalLogin = React.createRef()

    }

    handleEntrarClick() {

        this.setState({
            modalOpen: true
        })


        this.modalLogin.current.openModal()
    }

    handleSairClick() {

        this.setState({
            userLogged: false
        })
        localStorage.removeItem(constants.KEY_CONDO_STORAGE)
        window.location = '/'

    }



    

    handleCloseModal() {

        this.setState({
            modalOpen: false
        })

        this.modalLogin.current.handleCloseModal()
    }

    onUserLogin() {

        this.setState({
            userLogged: true,
            modalOpen: false
        })

        this.modalLogin.current.handleCloseModal()
    }


    render() {

        return (

            <React.Fragment>
                <div className='header'>
                    <div className="header-titulo">Up Life Residence</div>
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

                <Modal title="Entrar!"
                    modalOpen={this.state.modalOpen}
                    ref={this.modalLogin}
                    rows="5"
                    columns="4">

                    <Login onUserLogin={() => this.onUserLogin()} closeModal={() => this.handleCloseModal} />

                </Modal>
            </React.Fragment>
        )


    }


}

export default Header