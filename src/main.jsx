import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'

import App from './app/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.js'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './shared/context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
