import React from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'


export default function Tenant() {


    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [nomeError, setNomeError] = React.useState('')
    const [senhaError, setSenhaError] = React.useState('')
    const [confirmacaoSenhaError, setConfirmacaoSenhaError] = React.useState('')


    const handleSubmit = () => {

        alert('submit')

        let isValid = true;


        if (!email) {
            isValid = false;
            alert('aqui')
            setEmailError("O campo e-mail é obrigatório")
        }

        if (!nome) {
            isValid = false;
            setNomeError("O campo nome é obrigatório")
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

    const handleFocus = () => {


    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'nome') {
            setNome(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'senha') {
            setSenha(value)
        } else if (name === 'confirmacaoSenha') {
            setConfirmacaoSenha(value)
        }
    }


    const postUser = () => {


    }


    const validateEmail = (mail) => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }



    return (
        <>
            <h2 className="row-1-1 col-1-12">Novo morador</h2>
            <Form
                handleSubmit={() => {
                    handleSubmit()
                }}
                rowStart="2"
                rowEnd="7"
                columnStart="1"
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
                    columnstart="1"
                    columnend="6"
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
                    columnstart="1"
                    columnend="6"
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
                    columnstart="1"
                    columnend="6"
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
                    columnstart="1"
                    columnend="6"
                />


                <Button
                    label="Cadastrar"
                    rowStart="8"
                    rowEnd="8"
                    columnStart="1"
                    columnEnd="3"
                />


            </Form>
        </>
    )


}