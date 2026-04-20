import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../../../index.css'


export const Tabela = styled.div`
    width: var(--main_width);
    display: flex;
    flex-flow: column;
`

export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
`

export const Title = styled.h1`
    display: flex;
`

export const HeaderTabela = styled.div`
    width: 100%;
    display: flex;
`

export const LinhaTabela = styled.div`
    width: 100%;
    display: flex;
`

export const Dado = styled.div`
    width: 25%;
    display: flex;
    flex-grow: 1;
    padding: 5px 10px;
    border: solid 1px rgba(255, 255, 255, .1);
`

export const Botao = styled(Link)`
    display: flex;
    padding: 10px 30px;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, .1);
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    background-color: rgb(226, 73, 0);
    font-weight: bold;

    &:hover {
        background-color: rgb(155, 49, 0);
        transform: scale(0.98);
    }
`