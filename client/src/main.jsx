import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { userContextProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <userContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
            <ToastContainer />
          </Provider>
        </BrowserRouter>
      </userContextProvider>
    </ShopContextProvider>
  </React.StrictMode>,
)
