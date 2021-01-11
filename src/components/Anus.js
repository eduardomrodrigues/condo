import React from 'react'


export default function Anus(){

    const onSubmit = () => {

        alert('aqui')

    }


    return (
        <form onSubmit={onSubmit}>
            Teste
            <input type="text" ></input>
            <input type="submit" value="submit"></input>
        </form>


    )


}