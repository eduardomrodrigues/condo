import React from 'react'
import axios from 'axios'

import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'
import constants from '../const'

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}



class Body extends React.Component {

    constructor(props) {
        super(props)
    }


    recuperarToken() {
        return localStorage.getItem(constants.KEY_CONDO_STORAGE)
    }

    componentDidMount() {

        let token = this.recuperarToken()


        let usuarioLogado = b64DecodeUnicode(token.split('.')[1])
        
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