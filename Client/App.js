import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import userContext from "./context/userContext";
import Header from "./components/Header"
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Help from "./components/Help"
import Error from "./components/Error";

import Restaurant from "./components/Restaurant";

import "./styles.css";

const AppLayout = () => {
    return (
        <userContext.Provider value = {{userName : "Ayush"}}>
        <div>   
            <Header/>
            <Outlet/>
        </div>
        </userContext.Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children : [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact",
                element: <Contact data = "Props data"/>
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path : "/restaurant/:id",
                element: <Restaurant/>
            }
        ],
        errorElement : <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);