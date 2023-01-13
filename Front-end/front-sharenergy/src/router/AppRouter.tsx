import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Home } from "../page/Home"
import { LoginPage } from "../page/LoginPage"


export const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}