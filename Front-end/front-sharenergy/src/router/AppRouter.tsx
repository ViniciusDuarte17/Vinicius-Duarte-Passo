import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Cat } from "../page/Cat"
import { ClientPage } from "../page/ClientPage"
import { PageUpdateClient } from "../page/ClientPage/PageUpdateClient"
import { Dog } from "../page/Dog"
import { Home } from "../page/Home"
import { LoginPage } from "../page/LoginPage"
import { SingUpPage } from "../page/SingUp"


export const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<LoginPage />} />
                 <Route path="/inscreve-se" element={<SingUpPage />} />
                 <Route path="/dog" element={<Dog />} />
                 <Route path="/cat" element={<Cat />} />
                 <Route path="/client" element={<ClientPage />} />
                 <Route path="/update-client/:id" element={<PageUpdateClient />} />
            </Routes>
        </BrowserRouter>
    )
}