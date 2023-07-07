import styled from "styled-components";

export const Body = styled.body`
    height:100%;
    margin: 10%;
`

export const Header = styled.header`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    @media screen and (max-device-width: 480px){
        margin-top: 120px;
    }
`

export const Svg = styled.svg`
    width: 65px;
    height: 84.021px;
    flex-shrink: 0;
`

export const P = styled.p`
    font-size: 13px;
`

export const InputEmail = styled.input`
    
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    background: #FFF;
    flex-shrink: 0;

    color: #323941;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.800000011920929;

    @media screen and (max-device-width: 480px) {
        width: 80vw;
        height: 8vh;
        font-size: 13px;
    }
`

export const InputSenha = styled.input`
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    background: #FFF;
    flex-shrink: 0;

    color: #323941;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.800000011920929;

    @media screen and (max-device-width: 480px) {
        margin-top: 15px;
        width: 80vw;
        height: 8vh;
        font-size: 13px;
    }
`

export const Hr = styled.hr`
    border-style: none;
    border-width: 1px;
    margin: 10px 0;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
;
`
export const ButtonContinuar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 27px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    margin: 20px 0 0 0;

    color: #FFF;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-device-width: 480px) {    
        margin-top: 35px;
        width: 80vw;
        height: 8vh;
        padding: 9px 3px;
        font-size: 13px;
    }
`

export const ButtonCriaConta = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 27px;
    border: 1px solid #FE7E02;
    background-color: white;

    color: #FE7E02;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-device-width: 480px) {
        width: 80vw;
        height: 8vh;
        padding: 9px 3px;
        font-size: 13px;
    }
`