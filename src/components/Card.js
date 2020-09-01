import React from 'react'

function Card({ warning, titulo, imagem, children }) {

    const [isOpened, setIsOpened] = React.useState(false)


    const handleCloseCardOnClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setIsOpened(false)
    }


    const handleCardOnClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setIsOpened(true)
    }



    return (
        
        <div className={`card card--ativo ${isOpened ? 'card--opened' : 'card--closed'}`} onClick={(event) => handleCardOnClick(event)}>
            {
                (!isOpened) ?
                    <React.Fragment>
                        <div className={`${warning ? 'card-titulo--warning' : 'card-titulo--ativo'}`}>{titulo}</div>
                        <img alt="icone" src={imagem} className="card-imagem"></img>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="card-container-titulo--ativo_aberto">
                            <div className="card-titulo--ativo_aberto">
                                {titulo}
                            </div>
                            <div className="card-close--ativo_aberto button-close" onClick={(event) => handleCloseCardOnClick(event)}></div>
                        </div>
                        <div className="card-content">
                            {children}
                        </div>
                    </React.Fragment>

            }

        </div>
    )

}

export default Card