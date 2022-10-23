import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext";


function SampleComponent() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h3>SampleComponent</h3>
            <br />
            <p>Theme context:&nbsp;{theme}</p>
        </>
    )
}

export default function UseContextDemo() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h2>useContext demo</h2>
            <br />
            <p>Theme context:&nbsp;{theme}</p>
            <br />
            <SampleComponent />
        </>
    )
}



