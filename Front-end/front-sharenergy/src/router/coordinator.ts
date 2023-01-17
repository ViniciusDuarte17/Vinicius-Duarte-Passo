import { NavigateFunction } from "react-router-dom";

export const goToHome = (navigate: NavigateFunction) => {
    navigate("/")
}

export const goToLogin = (navigate: NavigateFunction) => {
    navigate("/login")
}

export const goToSingUp = (navigate: NavigateFunction) => {
    navigate("/inscreve-se")
}

export const goToDog = (navigate: NavigateFunction) => {
    navigate("/dog")
}

export const goToCat = (navigate: NavigateFunction) => {
    navigate("/cat")
}  

export const goToClient = (navigate: NavigateFunction) => {
    navigate("/client")
}  

export const goToUpdateClient = (navigate: NavigateFunction, id: string) => {
    navigate(`/update-client/${id}`)
} 