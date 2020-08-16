import React from 'react'

import Form from "./Form";
import Modal from './Modal'
import { useSpring, animated } from 'react-spring'


export default function CompleteUser({ user }) {

    const [usuario] = React.useState({
        modalComplemento: false,
        nome: user.name,
        email: user.email
    })

    const modalLoginComplemento = React.useRef()

    const props = useSpring({opacity: 1, from: {opacity: 0}})


    const onClickComplemento = () => {
        modalLoginComplemento.current.handleOpenModal()
    }

    return (
        <div className="col-2-12">
            <h2><animated.div style={props}>Fale-me mais sobre o que acontece no seu apartamento, </animated.div><span style={{ color: '#4581B5' }}> {usuario.nome}</span>...</h2>

            <Form
                columnStart="4"
                columnEnd="8"
                rowStart="2"
                rowEnd="6">


                <Modal title="Complemente seu cadastro"
                    modalOpen={usuario.modalComplemento}
                    ref={modalLoginComplemento} className="col-1-11 row-2-6">


                </Modal>



                <div
                    onClick={onClickComplemento}
                    className="col-1-4 add-user">Adicione as pessoas que moram com você!</div>

                <div className="col-1-4 add-user">Adicione dados do seus veículos</div>



            </Form>


        </div>
    )

}
