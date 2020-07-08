import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'

import './styles/index.css'




class App extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))