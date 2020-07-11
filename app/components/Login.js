import React from 'react'
import Form from './Form'
import Input from './Input'


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.inputEmail = React.createRef()
        this.inputPassword = React.createRef()

    }

    handleClick() {

        !this.state.email && this.inputEmail.current.addErrorMessage('O campo e-mail obrigatório')
        !this.state.password && this.inputPassword.current.addErrorMessage('O campo senha obrigatório')


    }


    handleChange(event) {
        event.persist()

        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <React.Fragment>

                <Form
                    columnStart="3"
                    columnEnd="11"
                    rowStart="1"
                    rowEnd="5">


                    <Input
                        ref={this.inputEmail}
                        label="e-mail"
                        type="email"
                        name="email"
                        id="email-id"
                        onChange={e => this.handleChange(e)}
                        value={this.state.email} />

                    <Input
                        ref={this.inputPassword}
                        name="password"
                        label="Senha"
                        type="password"
                        id="password-id"
                        onChange={e => this.handleChange(e)}
                        value={this.state.password} />

                </Form>

                <button
                    type="button"
                    onClick={() => this.handleClick()}
                    className="button button--active col-9-11 row-5-5 btn btn-primary">Login</button>

                <a className="col-3-6 row-5-5" href=""> Quero me cadastrar</a >
            </React.Fragment>
        )

    }


}


export default Login