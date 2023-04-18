import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
  </Provider>
  
    
)
