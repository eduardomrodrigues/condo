import React from 'react'
import ModalContext from './ModalContext'


class SemAcesso extends React.Component{
    
    static contextType = ModalContext

    componentDidMount(){
        this.context.abrirModalLogin(window.location.pathname)


    }

    render() {
        return (
            <div className="sem-acesso-grid">
                <h1>Por equanto você não tem acesso ao sistema <span style={{ color: '#4581B5' }}>UpLife Residence</span></h1>
                <p>
                    Se você já tem o cadastro, basta clicar em <span style={{ color: '#4581B5' }}>Entrar</span>. <br />
            Se você já tem seu cadastro informe com seu email e sua senha, caso contrário clique em <span style={{ color: '#4581B5' }}>quero me cadastrar</span>
                </p>
                <footer>
                    <div></div>
                </footer>
            </div>

        )
    }
}


export default SemAcesso