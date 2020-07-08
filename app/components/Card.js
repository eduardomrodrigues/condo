import React from 'react'



class Card extends React.Component {

    constructor(props){
        super(props)

    }


    render() {

        return (

            <div className="card card--ativo">
                <div className="card-titulo--ativo">{this.props.titulo}</div>
                <img src={this.props.imagem} className="card-imagem"></img>
                


            </div>
        )


    }


}

export default Card