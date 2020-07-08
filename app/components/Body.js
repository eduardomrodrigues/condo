import React from 'react'
import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'



class Body extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    
    render() {
        return (

            <div className="corpo">
                <Card titulo="Votação em andamento" imagem="app/images/vote.png" >
                    <VoteCard />
                </Card>


                <Card titulo="Reserva de salão de festas" imagem="app/images/party.png">
                    <React.Fragment>
                        <PartyCard />
                    </React.Fragment>
                </Card>
                
                <Card titulo="Reserva academia" imagem="app/images/gym.png">
                    <React.Fragment>
                        <GymCard />
                    </React.Fragment>
                </Card>

                <Card titulo="Reserva churrasqueira" imagem="app/images/barbecue.png">
                    <React.Fragment>
                        <BarbecueCard />
                    </React.Fragment>
                </Card>



            </div>
        )
    }
}

export default Body