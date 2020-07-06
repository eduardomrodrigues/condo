import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {

    
    render() {
        const eduardo = 'eduardo'
        return (
        <div>Hello World{eduardo}</div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))