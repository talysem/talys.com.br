import styled from 'styled-components'

export const Wide = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Box = styled.div`
    width: min(600px, 90%);
    padding: 40px;
    border-radius: 30px;
    border: solid 1px rgba(255, 255, 255, .1);
    background-color: #202020;
    box-shadow: 0 7px 15px rgba(0, 0, 0, .5);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
` 

export const Title = styled.h1`
    font-size: clamp(24px, 5dvw, 36px);
    color: rgba(255, 255, 255, 1);
    text-align: center;
`