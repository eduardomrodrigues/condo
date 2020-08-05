import React from 'react'

function Modal({ modalOpen, className, title, children }) {



    const [modal, setModal] = React.useState(modalOpen)

    const handleCloseModal = () => {
        setModal(false)
    }

    React.useEffect(() => {
        setModal(modalOpen)
    }, [modalOpen])



    return (

        <div
            className={`modal ${modal ? 'modal--opened' : 'modal--closed'} `}>
            <div className={`${modal ? 'modal-content--opened' : 'modal-content--closed'} ${className}`}>
                <div className="modal-header row-1-1 col-1-13">
                    <div className="col-1-11 modal-header-text">
                        {title}
                    </div>
                    <div className="col-11-13 button-close button-close--small" onClick={() => { handleCloseModal() }}></div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )




}


export default Modal