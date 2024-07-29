import React , {useState} from 'react'
function ColorPicker () {
    const [color,setColor] = useState("#fffff")
    function HandleColorChange (event) {
        setColor(event.target.value)
    }
    return (
        <div className="color-picker-container">
        <h1>Color picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected color:{color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={HandleColorChange}></input>
        </div>
    )

}
export default ColorPicker