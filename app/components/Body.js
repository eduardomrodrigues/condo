import React from 'react'
import axios from 'axios'

import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'
import constants from '../const'

class Body extends React.Component {

    constructor(props) {
        super(props)
    }


    recuperarToken() {
        return localStorage.getItem(constants.KEY_CONDO_STORAGE)
    }

    componentDidMount() {

        let token = this.recuperarToken()


        let usuarioLogado = atob(token.split('.')[1])
        console.log(usuarioLogado)
        
        let _email = JSON.parse(usuarioLogado).email

        axios.get(constants.API_URL + '/user/' + _email, {
            headers: {
                Authorization: token
            }
        }).then((usuario) => {
            console.log(usuario)

        }).catch((err) => {

            (err.response != null && err.response.status === 401) && (window.location = '/')


        })

    }


    render() {
        return (
            <div className="corpo">

                <Card titulo="Complete seu cadastro" imagem="app/images/complete.png" >
                    <CompleteUser />
                </Card>

                <Card titulo="Votação em andamento" imagem="app/images/vote.png" >
                    <VoteCard />
                </Card>


                <Card titulo="Reserva de salão de festas" imagem="app/images/party.png">
                    <PartyCard />
                </Card>

                <Card titulo="Reserva academia" imagem="app/images/gym.png">
                    <GymCard />
                </Card>

                <Card titulo="Reserva churrasqueira" imagem="app/images/barbecue.png">
                    <BarbecueCard />
                </Card>
            </div>

        )
    }
}

export default Body