import React from 'react'


function Form({ columnStart, columnEnd, rowStart, rowEnd, handleSubmit, children }) {


    const handleOnSubmit = (event) => {
        event.preventDefault()
        handleSubmit()
    }




    return (


        <form
            onSubmit={handleOnSubmit}
            noValidate
            style={{
                gridColumn: `${columnStart} / ${columnEnd}`,
                gridRow: `${rowStart} / ${rowEnd}`
            }}
            className={`form-grid `}>
            {children}
        </form>

    )



}


export default Form