import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Demands, Jobs, Complaints, Companies, Strikes} from "./pages";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="demands" element={<Demands />} />
          <Route path="strikes" element={<Strikes />} />
          <Route path="companies" element={<Companies />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="jobs" element={<Jobs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
