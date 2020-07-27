import React from 'react'

import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'




class Body extends React.Component {
    
 

    constructor(props) {
        super(props)
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