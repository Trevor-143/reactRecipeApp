import { useState } from 'react'
import Pages from "./pages/pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>App component</h2>
        <div>
          <Pages />
        </div>
      </div>
    </>
  )
}

export default App
