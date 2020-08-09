import React from 'react'


function Input({ columnstart, columnend, rowstart, rowend, name, label, type, errorMessage, ...props }) {
    
    const [error, setError] = React.useState('')
    const [success, ] = React.useState(false)
    
    React.useEffect(() => {
        if(errorMessage){
            setError(errorMessage)
        } else{
            setError('')
        }

    }, [errorMessage])


    return (
        <>
            <div style={{
                gridColumn: `${columnstart} / ${columnend}`,
                gridRow: `${rowstart} / ${rowend}`
            }}>
                <label htmlFor={`id-${name}`}>{label}</label>
                <input
                    {...props}
                    name={name}
                    className={`input-text ${success ? "input-text--success" : null}`}
                    type={`${type}`} id={`id-${name}`}></input>

                <div className={`input-invalid-message ${!error ? 'input-invalid-message--hide' : 'input-invalid-message--show'}`} >
                    {error}
                </div>
            </div>
        </>
    )



}

export default Input