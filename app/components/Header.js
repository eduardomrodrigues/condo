import React from 'react'
import Modal from './Modal'
import Login from './Login'



class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
        this.handleEntrarClick = this.handleEntrarClick.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.modalLogin = React.createRef()

    }

    handleEntrarClick() {

        this.setState({
            modalOpen: true
        })


        this.modalLogin.current.openModal()
    }


    handleCloseModal(){

        this.setState({
            modalOpen: false
        })

        this.modalLogin.current.handleCloseModal()
    }


    render() {

        return (

            <React.Fragment>
                <div className='header'>
                    <div className="header-titulo">Up Life Residence</div>
                    <div className="container-botao">
                        <input type="button"
                            value="Entrar"
                            className="button button--active"
                            onClick={() => { this.handleEntrarClick() }}></input>
                    </div>
                </div>

                <Modal title="Entrar!"
                    modalOpen={this.state.modalOpen}
                    ref={this.modalLogin}
                    rows="5"
                    columns="4">
                
                    <Login closeModal={() => this.handleCloseModal}/>
                
                </Modal>
            </React.Fragment>
        )


    }


}

export default Header