import React from 'react'
import Tenant from "./Tenant"
import Modal from './Modal'


export default function CompleteUser({ user }) {

    const [modalComplemento, setModalCoplemento] = React.useState(false)


    const [usuario] = React.useState({
        nome: user.name,
        email: user.email
    })


    const handleClickCloseModal = () => {
        setModalCoplemento(false)
    }


    return (

        <>

            <h2 className="row-1-1 col-1-12">Fale-me mais sobre o que acontece no seu apartamento, <span style={{ color: '#4581B5' }}> {usuario.nome}</span>...</h2>


            <div
                onClick={() => setModalCoplemento(!modalComplemento)}
                className="row-2-2 col-1-4 add-user">Adicione as pessoas que moram com você!</div>

            {user.inquilinos ?
                <ul>
                    {
                        user.inquilinos.map((k, v) => (
                            <li>{v.nome}</li>
                        ))
                    }
                </ul>
                : null}


            <div className="row-3-3 col-1-4 add-user">Adicione dados do seus veículos</div>
            <Modal className="modal-medium" 
                modalOpen={modalComplemento}
                onClickCloseModal={handleClickCloseModal}>
                    <Tenant />
           
            </Modal>




        </>

    )

}
