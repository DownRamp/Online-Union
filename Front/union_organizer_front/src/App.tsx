// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Link } from "react-router-dom";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/demands">Demands</Link> |{" "}
        <Link to="/jobs">Jobs</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/strikes">Strikes</Link>
      </nav>
    </div>
  )
}

export default App
