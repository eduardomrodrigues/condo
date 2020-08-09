import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from 'axios'
import constants from '../const'
import ModalContext from './ModalContext'


function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  const [messageError, ] = React.useState('')
  const [location, ] = React.useState('')

  const context = React.useContext(ModalContext)



  const handleSubmit = () => {
    let isValid = true;
    localStorage.removeItem(constants.KEY_CONDO_STORAGE)

    if (!email) {
      isValid = false;
      setEmailError('Por favor, informe seu email')
    }

    if (!password) {
      isValid = false;
      setPasswordError('Por favor, informe sua senha')
    }

    if (!validateEmail(email)) {
      isValid = false;
    }

    if (isValid) {
      axios.post(constants.API_URL + '/login', {
        name: email,
        senha: password
      }).then((result) => {
        localStorage.setItem(constants.KEY_CONDO_STORAGE, result.data.token)
      }).then(() => {
        context.onLoginSuccess()
      })
        .catch((error) => {

          if (error.response.status === 404) {
            this.setMessageError('Sua senha ou seu usuário estão errados')
          }
        });

    }


  }

  const validateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }

  }

  const handleQueroMeCadastrar = () => {
    context.fecharModalLogin()
  }

  return (
    <React.Fragment>
      <Form
        handleSubmit={() => {
          handleSubmit()
        }}
        columnStart="3"
        columnEnd="11"
        rowStart="1"
        rowEnd="12">


        {messageError ?
          <div className="box-invalid-message" style={{ gridArea: "2 / 1 / 2 / 12" }}>
            {messageError}
          </div>
          : null}

        <Input
          label="e-mail"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={email}
          rowstart="3"
          rowend="3"
          columnstart="1"
          columnend="13"
          errorMessage={emailError}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          value={password}
          rowstart="4"
          rowend="4"
          columnstart="1"
          columnend="13"
          errorMessage={passwordError}
        />

        <Link
          onClick={() => handleQueroMeCadastrar()}
          style={{ gridArea: "6 / 1 / 6 / 6" }} to="/user">
          Quero me cadastrar
          </Link>
        <Button
          label="login"
          rowStart="6"
          rowEnd="6"
          columnStart="9"
          columnEnd="13"
        />
      </Form>
    </React.Fragment>
  );
}

export default Login;
