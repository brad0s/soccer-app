import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/main.scss'
import { SoccerContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SoccerContextProvider>
      <App />
    </SoccerContextProvider>
  </React.StrictMode>
)
