import React from 'react'


export default function Tenant() {

    const [v, setV] = React.useState('')

    const formId = "something";
    const d = (e) => {
        e.preventDefault()
       console.log('aquin')
        alert('a1ui')
    }

    const handlerSubmit = (e) =>{
        e.stopPropagation()
        alert('aqui')
    }

    const a = 'titulo'
  

    return (
        <div>
        <form onSubmit={(e) => handlerSubmit(e)}>
           
            <input type='submit' value="Enviar" className={a}/>
        </form>
        </div>
    )

}