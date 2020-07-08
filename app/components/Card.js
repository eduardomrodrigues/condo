import React from 'react'



class Card extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpened: false
        }



        this.handleCardOnClick = this.handleCardOnClick.bind(this)
        this.handleCloseCardOnClick = this.handleCloseCardOnClick.bind(this)



    }


    handleCloseCardOnClick(event) {

        event.preventDefault()
        event.stopPropagation()
        this.setState(
            { isOpened: false }
        )


    }


    handleCardOnClick(event) {

        event.preventDefault()
        event.stopPropagation()
        this.setState(
            { isOpened: true }
        )

    }


    render() {

        return (
            <div className={`card card--ativo ${this.state.isOpened ? 'card--opened' : 'card--closed'}`} onClick={this.handleCardOnClick}>
                {
                    (!this.state.isOpened) ?
                        <React.Fragment>
                            <div className="card-titulo--ativo">{this.props.titulo}</div>
                            <img src={this.props.imagem} className="card-imagem"></img>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="card-container-titulo--ativo_aberto">
                                <div className="card-titulo--ativo_aberto">
                                    {this.props.titulo}
                                </div>
                                <div className="card-close--ativo_aberto" onClick={this.handleCloseCardOnClick}></div>
                            </div>
                            {this.props.children}
                        </React.Fragment>


                }

            </div>
        )


    }


}

export default Card