import React from 'react'
import { getUser } from '../services/UserService'
import constants from '../const'
import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function recuperarToken() {
    return localStorage.getItem(constants.KEY_CONDO_STORAGE)
}



class Body extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isComplete: false,
            user: {}
        }
    }



    componentDidMount() {
        let token = recuperarToken()
        let usuarioLogado = b64DecodeUnicode(token.split('.')[1])
        let _email = JSON.parse(usuarioLogado).email

        getUser(_email, token).then((user) => {

            this.setState({
                isComplete: user.data[0].isComplete,
                user: user.data[0]
            })
        }).catch((error) => {

        })

    }




    render() {
        return (
            <div className="corpo">
                {!this.state.isComplete ?
                    <Card warning="true" titulo={`Complete seu cadastro`} imagem="/images/complete.png" >
                        <CompleteUser user={this.state.user}/>
                    </Card>
                    : null}

                <Card titulo={`Votação em andamentos`} imagem="/images/vote.png" >
                    <VoteCard />
                </Card>


                <Card titulo="Reserva de salão de festas" imagem="/images/party.png">
                    <PartyCard />
                </Card>

                <Card titulo="Reserva academia" imagem="/images/gym.png">
                    <GymCard />
                </Card>

                <Card titulo="Reserva churrasqueira" imagem="/images/barbecue.png">
                    <BarbecueCard />
                </Card>
            </div>

        )
    }
}



export default Body