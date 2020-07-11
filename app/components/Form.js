import React from 'react'




class Form extends React.Component{


    render(){


        return (

            <dl style={{gridColumn:`${this.props.columnStart} / ${this.props.columnEnd}`,
                gridRow: `${this.props.rowStart} / ${this.props.rowEnd}`}}>
                    
                {this.props.children}
           
           
            </dl>



        )

    }


}


export default Form