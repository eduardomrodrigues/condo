import React from 'react'


function Button({columnStart, columnEnd, rowStart, rowEnd, label}) {



    return (

        <button
            style={{
                gridColumn: `${columnStart} / ${columnEnd}`,
                gridRow: `${rowStart} / ${rowEnd}`
            }}
            type="submit"
            className="button button--active btn btn-primary">{label}</button>
    )
}



export default Button