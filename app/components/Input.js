import React from 'react'


class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessage: '',
            success: false
        }

        this.handlerOnFocus = this.handlerOnFocus.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)

    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            alert('You clicked outside of me!');
        }
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

                    {this.state.errorMessage ?
                        <div className="input-invalid-message" >
                            {this.state.errorMessage}
                        </div>
                        : null}
                </div>
            </>
        )


    }

}

export default Input