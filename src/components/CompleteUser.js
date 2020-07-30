import React from 'react'

import Form from "./Form";



export default function CompleteUser({ user }) {


    const [usuario] = React.useState({
        nome: user.name,
        email: user.email


    })


    return (
        <div className="col-2-12">
            <h2>Fale-me mais sobre o que acontece no seu apartamento, <span style={{ color: '#4581B5' }}> {usuario.nome}</span>...</h2>

            <Form
                columnStart="4"
                columnEnd="8"
                rowStart="2"
                rowEnd="6">
                

            <div className="col-1-4 add-user">Adicione as pessoas que moram com você!</div>

            <div className="col-1-4 add-user">Adicione dados do seus veículos</div>
   


            </Form>


        </div>
    )

}
