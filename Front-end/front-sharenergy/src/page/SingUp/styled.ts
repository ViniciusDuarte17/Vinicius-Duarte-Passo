import styled from "styled-components";



export const ContainerSingUp = styled.div`
    display: flex;
    flex-direction: column;
    width: 99.8vw;
`


export const StyledSingUpForm = styled.form`
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
  margin-top: 1.5%;
  width: 13vw;
  height: 13vw;
  max-width: 350px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 42vw;
    height: 42vw;
    margin-top: 5%;
  }
`;