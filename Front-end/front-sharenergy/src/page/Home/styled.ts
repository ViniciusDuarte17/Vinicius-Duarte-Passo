import styled from "styled-components";
import {primary } from "../../constants/colors"


export const Container = styled.div`
    width: 99.88%;
    display: flex;
    flex-direction: column;
`

export const ContentCard = styled.main`
    display: flex;
    flex-wrap: wrap;
`

export const ContentTextField = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    margin-top: 2%;
`

export const CustomPagination = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin: 2%;
    color: ${primary};
`