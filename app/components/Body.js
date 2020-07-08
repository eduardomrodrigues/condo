import React from 'react'
import Card from './Card'


class Body extends React.Component {
    render() {
        return (
         
            <div className="corpo">
                <Card titulo="Votação em andamento" imagem="app/images/vote.png"/>
            </div>
         )
    }
}

export default Body