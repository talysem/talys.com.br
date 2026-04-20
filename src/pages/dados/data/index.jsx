import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import * as S from './styles'
import './index.css'
import '../../../index.css'

export const config = {
    label: 'Dados',
    headerOrder: 3,
    path: '/dados',
    showHeader: true,
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTp1R6zoP9N71eWw0jgMaAx4h3GLqZI6_pu2erC_dAi5jSUCWtTDUlL552bb_KMk_vXmlLS842_ezb4/pub?gid=0&single=true&output=csv'
const CTA_URL = 'https://docs.google.com/spreadsheets/d/1D1hLRzObIG6I6IefNbl3doMmWwcAchjyu7QvUz4-_Uw/edit?usp=sharing'

export default function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Papa.parse(SHEET_URL, {
            download: true,
            header: true,       // usa a primeira linha como chave dos objetos
            skipEmptyLines: true,
            complete: ({ data }) => {
                setData(data)
                setLoading(false)
            }
        })
    }, [])

    if (loading) return <p>Carregando...</p>

    return (
        <>
            <S.Tabela>
                <S.TitleBox>
                    <S.Title>Dados forneceidos por planilha</S.Title>
                    <S.Botao to={CTA_URL} target="_blank" rel="noopener noreferrer">Ver planilha</S.Botao>
                </S.TitleBox>
                <S.HeaderTabela>
                    <S.Dado id="first">
                        <strong>Device</strong>
                    </S.Dado>
                    <S.Dado>
                        <strong>Troca de tela</strong>
                    </S.Dado>
                    <S.Dado>
                        <strong>Troca da bateria</strong>
                    </S.Dado>
                </S.HeaderTabela>
                {data.map((row, i) => (
                    <S.LinhaTabela key={i}>
                        <S.Dado id="first">
                            <strong>{row.Device}</strong>
                        </S.Dado>
                        <S.Dado>
                            {row.Tela}
                        </S.Dado>
                        <S.Dado>
                            {row.Bateria}
                        </S.Dado>
                    </S.LinhaTabela>
                ))}

            </S.Tabela>
        </>
    )
}