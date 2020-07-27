import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import PrivateRouter from './components/PrivateRouter'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./styles/index.css";
import NewUser from "./components/NewUser";
import constants from './const'
import { ModalProvider } from './components/ModalContext'
import Modal from './components/Modal'
import Login from './components/Login'


function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const ModalContext = React.createContext({})

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
        }

        this.modalLogin = React.createRef()
        this.modalUser = React.createRef()
        this.inputHeader = React.createRef()

        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.onUserLogin = this.onUserLogin.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)

    }


    onUserLogin() {
        

        this.inputHeader.current.onUserLogin()
        this.handleCloseModal()

    }


    handleCloseModal() {
        this.modalLogin.current.handleCloseModal()
    }

    handleOpenModal(location) {

        this.modalLogin.current.handleOpenModal(location)
        this.modalUser.current.setLocation(location)
    }

    recuperarNomeUsuario() {


        let usuarioLogado = b64DecodeUnicode(localStorage.getItem(constants.KEY_CONDO_STORAGE).split('.')[1])

        return JSON.parse(usuarioLogado).nome
    }


    render() {
        return (
            <ModalProvider value={{ abrirModalLogin: (location = "/") => this.handleOpenModal(location), fecharModalLogin: () => { this.handleCloseModal() } }}>
                <React.Fragment>
                    <Router>


                        <Modal title="Entrar!"
                            modalOpen={this.state.modalOpen}
                            ref={this.modalLogin}
                            rows="5"
                            columns="4">

                            <Login ref={this.modalUser} onUserLogin={() => this.onUserLogin()} closeModal={() => this.handleCloseModal} />

                        </Modal>



                        <Header ref={this.inputHeader} />
                        <Switch>
                            <Route exact path="/">
                                <div className="welcome-grid">

                                    {localStorage.getItem(constants.KEY_CONDO_STORAGE) !== null ?


                                        <>
                                            <h1 style={{ textAlign: 'center' }}>Bem vindo, <span style={{ color: '#4581B5' }}>{this.recuperarNomeUsuario()}</span></h1>
                                            <p style={{ minHeight: '130px', textAlign: 'center' }}>
                                                Clique no menu <a href="/dashboard" style={{ color: '#4581B5', textDecoration: 'underline' }}>Meu condomínio</a> para acessar começar!
                                        </p>
                                        </>
                                        :
                                        <>
                                            <h1>Bem vindo ao <span style={{ color: '#4581B5' }}>UpLife Residence</span></h1>
                                            <p>
                                                Aqui você poderá alugar sua churrasqueira, reservar o salão de festas, participar dos acontecimentos do nosso condomínio.
                                            Seja bem vindo! Se você já tem o cadastro, basta clicar em <span style={{ color: '#4581B5' }}>Entrar</span>. <br />
                                            Se você já tem seu cadastro informe com seu email e sua senha, caso contrário
                                            clique em <span style={{ color: '#4581B5' }}>quero me cadastrar</span>
                                            </p>
                                        </>
                                    }


                                    <footer>
                                        <div></div>
                                    </footer>
                                </div>
                            </Route>

                            <PrivateRouter exact path="/dashboard" component={Body} />

                            <Route exact path="/user" component={NewUser} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </ModalProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
