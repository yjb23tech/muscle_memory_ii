
import { createRoot } from "react-dom/client"

const App = () => {
    return (
        <div>
            <h2>Sanity Check Extended</h2>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)