import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from 'axios'
import constants from '../const'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      messageError: '',
      location: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.inputEmail = React.createRef()
    this.inputPassword = React.createRef()

  }

  setLocation(location){
    this.setState({
      location: location

    })

  }




  handleSubmit() {
    let isValid = true;
    localStorage.removeItem(constants.KEY_CONDO_STORAGE)

    if (!this.state.email) {
      isValid = false;
      this.inputEmail.current.addErrorMessage("O campo e-mail obrigatório");
    }

    if (!this.state.password) {
      isValid = false;
      this.inputPassword.current.addErrorMessage("O campo senha obrigatório");
    }

    if (!this.validateEmail(this.state.email)) {
      this.inputEmail.current.addErrorMessage("Email inválido");
      isValid = false;
    }

    if (isValid) {
      axios.post(constants.API_URL + '/login', {
        name: this.state.nome,
        senha: this.state.password
      }).then((result) => {

        localStorage.setItem(constants.KEY_CONDO_STORAGE, result.data.token)
      }).then(() => {
        window.location = this.state.location
        this.props.onUserLogin()
      })
      .catch((error) => {

        if (error.response.status === 404) {
          this.setState({
            messageError: 'Sua senha ou seu usuário estão errados'
          })

        }
      });

    }


  }

  validateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  handleChange(event) {
    event.persist();

    const { name, value } = event.target;

    this.setState({
      [name]: value,
      messageError: ''

    });
  }

  render() {
    return (
      <React.Fragment>
        <Form
          handleSubmit={() => {
            this.handleSubmit();
          }}
          columnStart="3"
          columnEnd="11"
          rowStart="1"
          rowEnd="12">


          {this.state.messageError ?
            <div className="box-invalid-message" style={{ gridArea: "2 / 1 / 2 / 12" }}>
              {this.state.messageError}
            </div>
            : null}

          <Input
            ref={this.inputEmail}
            label="e-mail"
            type="email"
            name="email"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            rowstart="3"
            rowend="3"
            columnstart="1"
            columnend="13"
          />

          <Input
            ref={this.inputPassword}
            name="password"
            label="Senha"
            type="password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            rowstart="4"
            rowend="4"
            columnstart="1"
            columnend="13"
          />

          <Link
            onClick={this.props.closeModal()}
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
}

export default Login;
