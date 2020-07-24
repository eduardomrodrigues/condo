import React from 'react'
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import axios from 'axios'
import constants from '../const'


export default function CompleteUser(){


    const [nome, setNome] = React.useState('Eduardo')




    return (
        <div className="col-2-12">
            <h2>Fale-me mais sobre o que acontece no seu apartamento</h2>
            
            <Form 
                columnStart="4"
                columnEnd="8"
                rowStart="2"
                rowEnd="6">
                
            <Input label="Nome"
                columnstart="4"
                columnend="8" 
                rowstart="1"
                rowend="1"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                readonly="true"
                />





            </Form>


        </div>
    )




}