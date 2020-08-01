import React from 'react'


class Modal extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            modalOpen: this.props.modalOpen
        }


        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
    }

    handleCloseModal() {

        this.setState({
            modalOpen: false
        })

    }

    handleOpenModal() {
        this.setState({
            modalOpen: true
        })

    }

    render() {

        return (
            <div 
                className={`modal ${this.state.modalOpen ? 'modal--opened' : 'modal--closed'} `}>
                <div className={`${this.state.modalOpen ? 'modal-content--opened' : 'modal-content--closed'} ${this.props.className}`}>
                    <div className="modal-header row-1-1 col-1-13">
                        <div className="col-1-11 modal-header-text">
                            {this.props.title}
                        </div>
                        <div className="col-11-13 button-close button-close--small" onClick={() => { this.handleCloseModal() }}></div>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }




}


export default Modal