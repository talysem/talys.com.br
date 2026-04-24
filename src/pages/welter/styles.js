import styled from 'styled-components'
import '../../index.css'
import background from './src/whatsapp_android_bg.png'

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100dvh;
    padding: 40px;
    position: relative;

    &::before {
        width: 100dvw;
        height: 100dvh;
        content: '';
        position: absolute;
        top: 0;
        background-image: url(${background});
        opacity: .08;
    }
`

export const MessagesBody = styled.div`
    display: flex;
    flex-flow: column-reverse;
    justify-content: flex-end;
    align-items: center;
    width: min(600px, 100%);
    z-index: 0;
    gap: 12px;
`

export const DayGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 12px;
`

export const Day = styled.div`
    display: flex;
    align-self: center;
    background-color: #1D1F1F;
    padding: 4px 12px;
    border-radius: 6px;
    box-shadow: 0 0 1px 1px rbga(0, 0, 0, 0.5);
    font-size: 12px;
    font-weight: 600;
`

export const Messages = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    gap: 12px;

    & img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`

export const MessagesG = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 3px;
`

export const Message = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #242626;
    padding: 8px;
    border-radius: 8px;
    max-width: 70%;
    position: relative;

    &:first-of-type {
        border-radius: 0 8px 8px 8px;

        &::before {
            position: absolute;
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 13' height='13' width='8' preserveAspectRatio='xMidYMid meet' class='' version='1.1' x='0px' y='0px' enable-background='new 0 0 8 13'%3E%3Ctitle%3Etail-in%3C/title%3E%3Cpath opacity='0.13' fill='%230000000' d='M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z'%3E%3C/path%3E%3Cpath fill='%23242626' d='M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z'%3E%3C/path%3E%3C/svg%3E");
            width: 8px;
            height: 13px;
            top: 0;
            left: -8px;
        }
    }

    & p {
        font-size: 14px;
    }

    &>span {
        font-size: 12px;
        margin-bottom: -5px;
        opacity: .6;

        &>span {
            position: absolute;
            right: 8px;
            bottom: 4px;
        }
    }
`

export const Spacer = styled.span`
    display: inline-block;
    width: 42px;
    height: 12px;
`