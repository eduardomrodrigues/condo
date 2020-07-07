import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import './styles/index.css'




class App extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))