import React from 'react'

import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'




class Body extends React.Component {
    
 
    render() {
        return (
            <div className="corpo">

                <Card titulo="Complete seu cadastro" imagem="/images/complete.png" >
                    <CompleteUser />
                </Card>

                <Card titulo="Votação em andamento" imagem="/images/vote.png" >
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