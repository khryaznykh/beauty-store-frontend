import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'

import App from './app/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.js'
import { BrowserRouter } from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
