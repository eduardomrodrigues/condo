import React from 'react'

let to = {}

class Input extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            errorMessage: '',
            success: false
        }

        this.handlerOnFocus = this.handlerOnFocus.bind(this)

    }


    handlerOnFocus() {
        this.setState({
            errorMessage: '',
            success: false
        })

    }


    addErrorMessage(message) {

        this.setState({
            errorMessage: message
        })


        to = window.setTimeout(() => {

            this.setState({ errorMessage: null })

        }, 6000)

    }


    componentWillUnmount(){

        clearTimeout(to);

    }


    addSuccess() {

        this.setState({
            success: true
        })
    }


    render() {

        return (
            <>
                <div style={{
                    gridColumn: `${this.props.columnstart} / ${this.props.columnend}`,
                    gridRow: `${this.props.rowstart} / ${this.props.rowend}`
                }}>
                    <label htmlFor={`${this.props.id}`}>{this.props.label}</label>
                    <input {...this.props}
                        onFocus={() => this.handlerOnFocus()}
                        ref={this.props.id}
                        className={`input-text ${this.state.success ? "input-text--success" : null}`}
                        type={`${this.props.type}`} id={`${this.props.id}`}></input>

                        <div  className={`input-invalid-message ${!this.state.errorMessage ? 'input-invalid-message--hide': 'input-invalid-message--show'}`} >
                            {this.state.errorMessage}
                        </div>
                </div>
            </>
        )


    }

}

export default Input