import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { LoginPage } from "../page/LoginPage"


export const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}