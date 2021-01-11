import React from 'react'
import Form from "./Form";
import Input from "./Input";
import TowerButtons from "./TowerButtons";
import Button from "./Button";
import axios from 'axios'
import constants from '../const'
import { Redirect } from 'react-router-dom';
import ModalContext from './ModalContext'

function NewUser() {

    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [torre, setTorre] = React.useState('torre1')
    const [apartamento, setApartamento] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [nomeError, setNomeError] = React.useState('')
    const [apartamentoError, setApartamentoError] = React.useState('')
    const [senhaError, setSenhaError] = React.useState('')
    const [confirmacaoSenhaError, setConfirmacaoSenhaError] = React.useState('')
    const [successRedirect, setSuccessRedirect] = React.useState(false)

    const [success, setSuccess] = React.useState(false)
    const [messageSuccess, setMessageSuccess] = React.useState(false)

    const context = React.useContext(ModalContext)

    const postUser = () => {

        axios.post(constants.API_URL + '/user', {
            name: nome,
            email: email,
            ap: apartamento,
            torre: torre,
            senha: senha
        }).then((token) => {
            handleSuccess(token.data)
        }).catch((error) => {
            if (error.response.status === 409) {
                setEmailError(error.response.data.message)
            }
        });

    }


    const validateEmail = (mail) => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }

    const handleSubmit = () => {

        let isValid = true;


        if (!email) {
            isValid = false;
            setEmailError("O campo e-mail é obrigatório")
        }

        if (!nome) {
            isValid = false;
            setNomeError("O campo nome é obrigatório")
        }

        if (!apartamento) {
            isValid = false;
            setApartamentoError("Qual o número do seu apartamento?")
        }

        if (!senha) {
            isValid = false;
            setSenhaError("Informe uma senha")
        }

        if (!confirmacaoSenha) {
            isValid = false
            setConfirmacaoSenhaError("Confirme sua senha")
        }

        if (senha !== confirmacaoSenha) {
            isValid = false;
            setConfirmacaoSenha('')
        }

        if (!validateEmail(email)) {
            isValid = false;
        }

        isValid && postUser()

    }



    const handleChange = (event) => {

        const { name, value } = event.target;

        if (name === 'nome') {
            setNome(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'apartamento') {
            setApartamento(value)
        } else if (name === 'senha') {
            setSenha(value)
        } else if (name === 'confirmacaoSenha') {
            setConfirmacaoSenha(value)
        }
    }


    const handleFocus = () => {
        setNomeError("")
        setEmailError("")
        setApartamentoError("")
        setSenhaError("")
        setConfirmacaoSenhaError("")

    }


    React.useEffect(() => {

        if (!messageSuccess) {
            return
        }
        const timeOut = setTimeout(() => {
            setSuccessRedirect(true)
        }, 2000)

        return () => clearTimeout(timeOut)
    }, [messageSuccess])


    React.useEffect(() => {
        if (!success) {
            return
        }

        const redirect = setTimeout(() => {
            setMessageSuccess(true)
        }, 500)

        return () => clearTimeout(redirect)
    }, [success])


    const handleSuccess = ({ token }) => {

        localStorage.setItem(constants.KEY_CONDO_STORAGE, token)
        setSuccess(true)
        context.onLoginSuccess()
    }


    return (
        <>
            <div className="form-grid">

                {!success ?

                    <>
                        <h1 className={`form-titulo`}>Bem vindo, <span className="nome-logado-sucesso">vamos criar seu login?</span></h1>
                        <Form
                            handleSubmit={() => {
                                handleSubmit()
                            }}
                            rowStart="2"
                            rowEnd="7"
                            columnStart="4"
                            columnEnd="11"
                            className={`form-single`}>



                            <Input
                                onFocus={() => { handleFocus() }}
                                errorMessage={nomeError}
                                label="nome*"
                                type="text"
                                name="nome"
                                onChange={(e) => handleChange(e)}
                                value={nome}
                                rowstart="1"
                                rowend="1"
                                columnstart="3"
                                columnend="8"
                            />

                            <Input
                                onFocus={() => { handleFocus() }}
                                errorMessage={emailError}
                                label="e-mail*"
                                type="email"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                value={email}
                                rowstart="2"
                                rowend="2"
                                columnstart="3"
                                columnend="8"
                            />

                            <Input
                                onFocus={() => { handleFocus() }}
                                errorMessage={senhaError}
                                label="senha*"
                                type="password"
                                name="senha"
                                onChange={(e) => handleChange(e)}
                                value={senha}
                                rowstart="3"
                                rowend="3"
                                columnstart="3"
                                columnend="8"
                            />


                            <Input
                                onFocus={() => { handleFocus() }}
                                errorMessage={confirmacaoSenhaError}
                                label="confimação de senha*"
                                type="password"
                                name="confirmacaoSenha"
                                onChange={(e) => handleChange(e)}
                                value={confirmacaoSenha}
                                rowstart="4"
                                rowend="4"
                                columnstart="3"
                                columnend="8"
                            />

                            <Input
                                onFocus={() => { handleFocus() }}
                                errorMessage={apartamentoError}
                                label="apartamento*"
                                type="number"
                                name="apartamento"
                                onChange={(e) => handleChange(e)}
                                value={apartamento}
                                rowstart="5"
                                rowend="5"
                                columnstart="3"
                                columnend="5"
                            />

                            <TowerButtons
                                rowstart="5"
                                rowend="7"
                                columnstart="6"
                                columnend="9"
                                value={torre}
                                handleChange={(t) => {
                                    setTorre(t)
                                }} />

                            <Button
                                label="Cadastrar"
                                rowStart="8"
                                rowEnd="8"
                                columnStart="3"
                                columnEnd="5"
                            />


                        </Form>
                    </> :
                    successRedirect ? <Redirect to='/dashboard'/> :
                        <>
                            <h1 style={{ opacity: messageSuccess ? 1 : 0 }} className='form-titulo'>Bem vindo, <span className="nome-logado-sucesso">{nome}</span></h1>
                            <div style={{ opacity: messageSuccess ? 1 : 0 }} className="col-6-11 row-3-7">
                                <h2>Preparando sua home...</h2>
                                <img alt="progresso" src='/images/progress.gif' />
                            </div>
                        </>

                }

            </div>
        </>
    )


}

export default NewUser