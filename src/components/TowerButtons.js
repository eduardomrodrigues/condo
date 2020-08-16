import React from 'react'

function TowerButtons({ value, handleChange, columnstart, columnend, rowstart, rowend}) {


    const [selectedTower, setSelectedTower] = React.useState(value)


    const handleClick = (torre) => {
        setSelectedTower(torre)
        handleChange(torre)
    }


    return (
        <div
            style={{
                gridColumn: `${columnstart} / ${columnend}`,
                gridRow: `${rowstart} / ${rowend}`
            }}>
            <div
                className={`button-medium ${selectedTower === 'torre1' ? 'button-medium--pressed' : 'button-medium--active'}`}
                onClick={() => handleClick('torre1')}>
                <div>
                    Torre 1
                    </div>
            </div>

            <div
                className={`button-medium ${selectedTower === 'torre2' ? 'button-medium--pressed' : 'button-medium--active'}`}
                onClick={() => handleClick('torre2')}>
                <div>
                    Torre 2
                    </div>
            </div>

            <input type="radio"
                style={{ display: 'none' }}
                value="torre1"
                name="towers"
                onChange={(e) => setSelectedTower('torre1')}
                checked={selectedTower === 'torre1'} />
            <input
                type="radio"
                style={{ display: 'none' }}
                name="towers"
                onChange={(e) => setSelectedTower('torre2')}
                value="torre2"
                checked={selectedTower === 'torre1'} />
        </div>

    )
}

export default TowerButtons