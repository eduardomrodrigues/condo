import React from 'react'
import { getUser } from '../services/UserService'
import constants from '../const'
import Card from './Card'
import VoteCard from './VoteCard'
import PartyCard from './PartyCard'
import GymCard from './GymCard'
import BarbecueCard from './BarbecueCard'
import CompleteUser from './CompleteUser'

const b64DecodeUnicode = (str) => {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const recuperarToken = () => {
    return localStorage.getItem(constants.KEY_CONDO_STORAGE)
}



function Body() {


    const [isComplete, setComplete] = React.useState(false)
    const [user, setUser] = React.useState({})


    React.useEffect(() => {
        let token = recuperarToken()
        let usuarioLogado = b64DecodeUnicode(token.split('.')[1])
        let _email = JSON.parse(usuarioLogado).email

        getUser(_email, token).then((user) => {

            setComplete(user.data[0].isComplete)
            setUser(user.data[0])

        }).catch((error) => {

        })
    }, [])


    return (
        <div className="corpo">
            {!isComplete ?
                <Card warning="true" titulo={`Complete seu cadastro`} imagem="/images/complete.png" >
                    <CompleteUser user={user} />
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



export default Body