import React from 'react'
import Form from "./Form";
import Input from "./Input";
import TowerButtons from "./TowerButtons";
import Button from "./Button";
import axios from 'axios'
import constants from '../const'


let timerSuccessMessage = {}
let redirect = {}

class NewUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            nome: '',
            torre: 'torre1',
            apartamento: '',
            senha: '',
            confirmacaoSenha: '',
            success: false,
            messageSuccess: false

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.postUser = this.postUser.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)


        this.inputEmail = React.createRef()
        this.inputNome = React.createRef()
        this.inputApartamento = React.createRef()
        this.inputSenha = React.createRef()
        this.inputConfirmacaoSenha = React.createRef()



    }


    postUser() {

        var current = this;
        axios.post(constants.API_URL + '/user', {
            name: this.state.nome,
            email: this.state.email,
            ap: this.state.apartamento,
            torre: this.state.torre,
            senha: this.state.senha
        }).then(function (token) {

            current.handleSuccess(token.data)

        }).catch(function (error) {
            if (error.response.status === 409) {
                current.inputEmail.current.addErrorMessage(error.response.data.message);
            }
        });

    }


    validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }

    handleSubmit() {


        let isValid = true;


        if (!this.state.email) {
            isValid = false;
            this.inputEmail.current.addErrorMessage("O campo e-mail é obrigatório");
        }

        if (!this.state.nome) {
            isValid = false;
            this.inputNome.current.addErrorMessage("O campo nome é obrigatório");
        }

        if (!this.state.apartamento) {
            this.inputApartamento.current.addErrorMessage("Qual o número do seu apartamento?");
            isValid = false;
        }

        if (!this.state.senha) {
            this.inputSenha.current.addErrorMessage("Informe uma senha");
            isValid = false;
        }

        if (!this.state.confirmacaoSenha) {
            this.inputConfirmacaoSenha.current.addErrorMessage("Confirme sua senha");
            isValid = false;
        }

        if(this.state.senha !== this.state.confirmacaoSenha){
            this.inputSenha.current.addErrorMessage("As senhas não conferem");
            this.setState({
                confirmacaoSenha: ''
            })
            isValid = false;
        }

        if (!this.validateEmail(this.state.email)) {
            this.inputEmail.current.addErrorMessage("Email inválido")
            isValid = false;
        }

        isValid && this.postUser()
    }


    handleChange(event) {
        event.persist();

        const { name, value } = event.target;


        this.setState({
            [name]: value,
        });
    }



    handleSuccess({token}) {
        

        localStorage.setItem(constants.KEY_CONDO_STORAGE, token.split('.')[1])
        
        this.setState({
            success: true
        })



        timerSuccessMessage = setTimeout(() => {
            this.setState({
                messageSuccess: true
            })
            redirect = setTimeout(() => {
                this.props.onUserLogin()
                window.location = '/dashboard'
            }, 2000)

        }, 500)
    }

    componentWillUnmount() {
        clearTimeout(timerSuccessMessage)
        clearTimeout(redirect)
    }


    render() {
        return (
            <>
                <div className="form-grid">


                    {!this.state.messageSuccess ?

                        <>
                            <h1 className={`form-titulo ${this.state.success ? 'hiding' : null}`}>Bem vindo, <span className="nome-logado-sucesso">vamos criar seu login?</span></h1>
                            <Form
                                handleSubmit={() => {
                                    this.handleSubmit();
                                }}
                                rowStart="2"
                                rowEnd="7"
                                columnStart="4"
                                columnEnd="11"
                                className={`form-single ${this.state.success ? 'hiding' : null}`}>



                                <Input
                                    ref={this.inputNome}
                                    label="nome*"
                                    type="text"
                                    name="nome"
                                    id="nome-id"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.nome}
                                    rowstart="1"
                                    rowend="1"
                                    columnstart="3"
                                    columnend="8"
                                />

                                <Input
                                    ref={this.inputEmail}
                                    label="e-mail*"
                                    type="email"
                                    name="email"
                                    id="email-id"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.email}
                                    rowstart="2"
                                    rowend="2"
                                    columnstart="3"
                                    columnend="8"
                                />

                                <Input
                                    ref={this.inputSenha}
                                    label="senha*"
                                    type="password"
                                    name="senha"
                                    id="senha-id"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.senha}
                                    rowstart="3"
                                    rowend="3"
                                    columnstart="3"
                                    columnend="8"
                                />


                                <Input
                                    ref={this.inputConfirmacaoSenha}
                                    label="confimação de senha*"
                                    type="password"
                                    name="confirmacaoSenha"
                                    id="confirmacaoSenha-id"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.confirmacaoSenha}
                                    rowstart="4"
                                    rowend="4"
                                    columnstart="3"
                                    columnend="8"
                                />

                                <Input
                                    ref={this.inputApartamento}
                                    label="apartamento*"
                                    type="number"
                                    name="apartamento"
                                    id="apartamento-id"
                                    onChange={(e) => this.handleChange(e)}

                                    value={this.state.apartamento}
                                    rowstart="5"
                                    rowend="5"
                                    columnstart="3"
                                    columnend="5"
                                />




                                <TowerButtons
                                    rowstart="5"
                                    rowend="7"
                                    columnstart="5"
                                    columnend="9"
                                    value={this.state.torre}
                                    handleChange={(t) => {
                                        this.setState({
                                            torre: t
                                        })

                                    }} />


                                <Button
                                    label="login"
                                    rowStart="8"
                                    rowEnd="8"
                                    columnStart="3"
                                    columnEnd="5"
                                />


                            </Form>
                        </> :
                        <>
                            <h1 style={{ opacity: this.state.messageSuccess ? 1 : 0 }} className='form-titulo'>Bem vindo, <span className="nome-logado-sucesso">{this.state.nome}</span></h1>
                            <div style={{ opacity: this.state.messageSuccess ? 1 : 0 }} className="col-6-11 row-3-7">
                                <h2>Preparando sua home...</h2>
                                <img src='app/images/progress.gif' />
                            </div>
                        </>
                    }

                </div>
            </>
        )
    }


}

export default NewUser