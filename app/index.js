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

class App extends React.Component {


    constructor(props) {
        super(props)

        this.onUserLogin = this.onUserLogin.bind(this)

        this.inputHeader = React.createRef()
    }


    onUserLogin() {
        this.inputHeader
    }



    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header ref={this.inputHeader} />
                    <Switch>
                        <Route exact path="/">
                            <div className="welcome-grid">
                                <h1>Bem vindo ao <span style={{ color: '#4581B5' }}>UpLife Residence</span></h1>
                                <p>
                                    Aqui você poderá alugar sua churrasqueira, reservar o salão de festas, participar dos acontecimentos do nosso condomínio.
                                    Seja bem vindo! Se você já tem o cadastro, basta clicar em <span style={{ color: '#4581B5' }}>Entrar</span>. <br/>
                                    Se você já tem seu cadastro informe com seu email e sua senha, caso contrário clique em <span style={{ color: '#4581B5' }}>quero me cadastrar</span>  
                                </p>
                                <footer>
                                    <div></div>
                                </footer>
                            </div>
                        </Route>

                        <PrivateRouter exact path="/dashboard" component={Body} />

                        <Route path="/user" component={() => <NewUser onUserLogin={() => this.onUserLogin()} />}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
