import React from 'react'


function Form({ columnStart, columnEnd, rowStart, rowEnd, handleSubmit, big = false, children }) {


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
            className={`form-grid${big?'-big':''} `}>
            {children}
        </form>

    )



}


export default Form