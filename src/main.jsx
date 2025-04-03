import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";     // It is used to connect the react and redux.
import './index.css'
import App from './App.jsx'

import store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Here we pass the store as prop in Provider to connect the store of states with react components */}
    <Provider store={store}>   
      <App />
    </Provider>
  </StrictMode>,
)
