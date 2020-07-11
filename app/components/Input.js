import React from 'react'


class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }


    handlerOnFocus(){
        this.setState({
            errorMessage: ''
        })

    }



    addErrorMessage(message){

        this.setState({
            errorMessage: message
        })
    }



    render() {

        return (
            <>
                <dt className="input-label">
                    <label htmlFor={`${this.props.id}`}>{this.props.label}</label>
                </dt>
                <dd>
                    <input {...this.props}
                        onFocus={() => this.handlerOnFocus()}
                        ref={this.props.id}
                        className="input-text"
                        type={`${this.props.type}`} id={`${this.props.id}`}></input>
                </dd>

                {this.state.errorMessage ?
                    <dd className="input-invalid-message" >
                        {this.state.errorMessage}
                </dd>
                    : null}
            </>
        )


    }

}

export default Input