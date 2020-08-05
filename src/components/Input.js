import React from 'react'


function Input({ columnstart, columnend, rowstart, rowend, name, label, type, errorMessage, ...props }) {
    
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    
    const to = React.useRef(null)
    
    React.useEffect(() => {
        console.log("Aquiii")
        console.log(errorMessage)
        if(errorMessage){
            setError(errorMessage)
            to.current = window.setTimeout(() => {
                setError(null)
            }, 4500)

        } 

    }, [errorMessage])


    const handlerOnFocus = () => {

        setError('')
        setSuccess(false)

    }

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
                    onFocus={() => handlerOnFocus()}
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