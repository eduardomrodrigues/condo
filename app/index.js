import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './styles/index.css'




class App extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Header />
                        <Body />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))