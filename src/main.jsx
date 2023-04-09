import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App2 from './App2'
import App3 from './App3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2/> */}
      <App3/>
    </Provider>
  </React.StrictMode>,
)
