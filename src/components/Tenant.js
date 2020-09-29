import React from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'



export default function Tenant() {

    const [v, setV] = React.useState('')


    const handleSubmit = (evt) => {
        alert(evt)

    }


    return (

        <form name="anus" onSubmit={() => alert('a')}>
            
            <input type="text" value={v} onChange={e => {setV(e.target.value)}}></input>
            <input type="submit" value="TESTE"></input>



        </form>

    )

}