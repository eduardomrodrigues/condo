import React from 'react'




class Form extends React.Component {

    constructor(props) {
        super(props)


        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleSubmit()
    }


    render() {


        return (


            <form
                onSubmit={this.handleSubmit}
                noValidate
                style={{
                    gridColumn: `${this.props.columnStart} / ${this.props.columnEnd}`,
                    gridRow: `${this.props.rowStart} / ${this.props.rowEnd}`
                }}
                className="form-grid">
                {this.props.children}
            </form>

        )

    }


}


export default Form