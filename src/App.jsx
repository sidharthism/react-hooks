import './App.css'


import UseStateDemo from "./components/UseStateDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseContextDemo from "./components/UseContextDemo";
import UseRefDemo from "./components/UseRefDemo";

import { ThemeContext } from "./contexts";

import { useColorScheme } from "./hooks";

function App() {
  const colorScheme = useColorScheme();
  return (
    <>
      <ThemeContext.Provider value={{ theme: colorScheme }}>
        <UseStateDemo />
        <hr />
        <UseEffectDemo />
        <hr />
        <UseContextDemo />
        <hr />
        <UseRefDemo />
      </ThemeContext.Provider>
    </>
  )
}

export default App
