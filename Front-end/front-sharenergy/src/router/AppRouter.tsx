import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Cat } from "../page/Cat"
import { ClientPage } from "../page/ClientPage"
import { Dog } from "../page/Dog"
import { Home } from "../page/Home"
import { LoginPage } from "../page/LoginPage"


export const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<LoginPage />} />
                 <Route path="/dog" element={<Dog />} />
                 <Route path="/cat" element={<Cat />} />
                 <Route path="/client" element={<ClientPage />} />
            </Routes>
        </BrowserRouter>
    )
}