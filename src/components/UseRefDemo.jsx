import { useRef } from "react"

export default function UseRefDemo() {
    // refs are used for referencing dom elements, keeping track of previous values, etc.
    const inputRef = useRef(null);

    const handleClick = (e) => inputRef.current.focus()

    return (
        <>
            <h2>useRef demo</h2>
            <br />
            <input ref={inputRef} type="text" />
            <br />
            <br />
            <button onClick={handleClick}>Click to focus input</button>
        </>
    )
}



