import React from 'react'
import PropTypes from 'prop-types';


class Button extends React.Component {


    render() {

        return (

            <button
                style={{
                    gridColumn: `${this.props.columnStart} / ${this.props.columnEnd}`,
                    gridRow: `${this.props.rowStart} / ${this.props.rowEnd}`
                }}
                type="submit"
                className="button button--active btn btn-primary">{this.props.label}</button>
        )



    }




}

Button.propTypes = {

    label: PropTypes.string.isRequired


}


export default Button