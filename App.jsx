
import { createRoot } from "react-dom/client"
import Header from "./components/Header.jsx"

const App = () => {
    return (
        <div>
            <Header />
            <h2>Sanity Check Extended</h2>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)