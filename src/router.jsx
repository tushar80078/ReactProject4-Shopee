import {createBrowserRouter} from "react-router-dom"
import ShowData from "./Components/ShowData"
import App from "./App"
import ShowCart from "./Components/ShowCart"


export const router=createBrowserRouter(
    [
        {
            path:"/show",
            element:<ShowData/>
        },

        {
            path:"/",
            element:<App/>
        },

        {
            path:"/cart",
            element:<ShowCart/>
        }

    ]
)