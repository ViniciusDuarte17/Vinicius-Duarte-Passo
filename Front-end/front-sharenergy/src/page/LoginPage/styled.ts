import styled from "styled-components";


export const Container = styled.div`


`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 99.8vw;
    /* border: solid 1px green; */
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 2%;
`

export const LogoImg = styled.img`
  display: flex;
  margin: auto;
  margin-top: 2%;
  width: 15vw;
  height: 15vw;
  max-width: 350px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 42vw;
    height: 42vw;
    margin-top: 5%;
  }
`;

export const ContentButtonSignup = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    margin-top: 2%;
    justify-content: center;
`