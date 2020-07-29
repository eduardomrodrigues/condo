import React from 'react'

class TowerButtons extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            selectedTower: this.props.value
        }

    }

    handleClick(torre) {
        this.setState({
            selectedTower: torre
        })
    
        this.props.handleChange(torre)
    
    }


    render() {
        return (
            <div
                style={{
                    gridColumn: `${this.props.columnstart} / ${this.props.columnend}`,
                    gridRow: `${this.props.rowstart} / ${this.props.rowend}`
                }}>
                <div
                    className={`button-medium ${this.state.selectedTower === 'torre1' ? 'button-medium--pressed' : 'button-medium--active'}`}
                    onClick={() => this.handleClick('torre1')}>
                    <div>
                        Torre 1
                    </div>
                </div>

                <div
                    className={`button-medium ${this.state.selectedTower === 'torre2' ? 'button-medium--pressed' : 'button-medium--active'}`}
                    onClick={() => this.handleClick('torre2')}>
                    <div>
                        Torre 2
                    </div>
                </div>

                <input type="radio"
                    style={{ display: 'none' }}
                    value="torre1"
                    name="towers"
                    onChange={(e) => this.setState({ selectedTower: 'torre1' })}
                    checked={this.state.selectedTower === 'torre1'} />
                <input
                    type="radio"
                    style={{ display: 'none' }}
                    name="towers"
                    onChange={(e) => this.setState({ selectedTower: 'torre2' })}
                    value="torre2"
                    checked={this.state.selectedTower === 'torre1'} />
            </div>

        )
    }
}

export default TowerButtons