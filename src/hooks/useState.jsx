import { useState } from "react";

export default function UseStateDemo() {
    const [color, setColor] = useState("#777777");
    const [preferences, setPreferences] = useState({ backgroundColor: color, fontSize: "1rem" });
    const [value, setValue] = useState(() => {
        // Slow computation - useState can also take a function as the argument instead of a value, and that function will only be run the very first time a component is rendered. 
        // By using this function version of useState you will no longer run the slow computation each render, but only once on the first render of the component just like class components.
        return 7;
    })

    // onClick handlers
    const handleChangeColor = (e) => {
        e.preventDefault();
        setPreferences(currentPreferences => ({ ...currentPreferences, backgroundColor: color }))
    };

    return (
        <>
            <h2>useState demo</h2>
            <br />
            <label htmlFor="color">Select color: </label>
            <input name="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <br />
            <br />
            <button style={preferences} onClick={handleChangeColor}>Change Color</button>
        </>
    )
}
