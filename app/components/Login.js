import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.inputEmail = React.createRef()
    this.inputPassword = React.createRef()

  }

  handleSubmit() {
    let isValid = true;

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

    console.log(`submeter ${isValid}`);
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  handleChange(event) {
    event.persist();

    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    window.location = "/user";
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
          rowEnd="12"
        >
          <Input
            ref={this.inputEmail}
            label="e-mail"
            type="email"
            name="email"
            id="email-id"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            rowstart="2"
            rowend="2"
            columnstart="1"
            columnend="13"
          />

          <Input
            ref={this.inputPassword}
            name="password"
            label="Senha"
            type="password"
            id="password-id"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            rowstart="3"
            rowend="3"
            columnstart="1"
            columnend="13"
          />

          <Link 
            onClick={this.props.closeModal()}
            style={{ gridArea: "5 / 1 / 5 / 6" }} to="/user">
            Quero me cadastrar
          </Link>
          <Button
            label="login"
            rowStart="5"
            rowEnd="5"
            columnStart="9"
            columnEnd="13"
          />
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;
