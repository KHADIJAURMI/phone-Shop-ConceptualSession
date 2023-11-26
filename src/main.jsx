import React, { createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider}  from 'react-router-dom'
import myCreatedRoute from './Router/Router'


export const GlobalContext =createContext();
 export const GlobalContext2 = createContext();
 const userInfo = {
  name : "hasib",
  id: "5",
  age: 34
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <GlobalContext.Provider value={{userInfo}}>
    <GlobalContext2.Provider value={userInfo}>
       <RouterProvider router={myCreatedRoute}></RouterProvider>
     </GlobalContext2.Provider>,
  </GlobalContext.Provider>,
  </React.StrictMode>
)
