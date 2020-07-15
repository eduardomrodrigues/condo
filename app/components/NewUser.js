import React from 'react'
import Form from "./Form";
import Input from "./Input";
import TowerButtons from "./TowerButtons";
import Button from "./Button";


class NewUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            nome: '',
            torre: 'torre1',
            apartamento: '',
            garagem: ''

        }

        this.handleChange = this.handleChange.bind(this)

        this.inputEmail = React.createRef()
        this.inputNome = React.createRef()
        this.inputApartamento = React.createRef()
        this.inputGaragem = React.createRef()

    }

    handleChange(event) {
        event.persist();

        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit() {
        console.log(this.state.torre);
    }



    render() {
        return (
            <div className="form-grid">
                <h1 className="form-titulo">Bem vindo!</h1>
                <Form
                    handleSubmit={() => {
                        this.handleSubmit();
                    }}
                    rowStart="2"
                    rowEnd="7"
                    columnStart="2"
                    columnEnd="6"
                    className="form-single">



                    <Input
                        ref={this.inputNome}
                        label="nome"
                        type="text"
                        name="nome"
                        id="nome-id"
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.nome}
                        rowstart="1"
                        rowend="1"
                        columnstart="3"
                        columnend="11"
                    />

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
                        columnstart="3"
                        columnend="11"
                    />

                    <Input
                        ref={this.inputApartamento}
                        label="apartamento"
                        type="number"
                        name="apartamento"
                        id="apartamento-id"
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.apartamento}
                        rowstart="3"
                        rowend="3"
                        columnstart="3"
                        columnend="7"
                    />

                    <Input
                        ref={this.inputGaragem}
                        label="vaga na garagem"
                        type="number"
                        name="garagem"
                        id="garagem-id"
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.garagem}
                        rowstart="3"
                        rowend="3"
                        columnstart="7"
                        columnend="11"
                    />


                    <TowerButtons
                        rowstart="4"
                        rowend="6"
                        columnstart="3"
                        columnend="11"
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
                        columnStart="9"
                        columnEnd="13"
                    />


                </Form>
            </div>
        )
    }


}

export default NewUser