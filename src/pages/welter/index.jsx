import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import * as S from './styles.js'
import '../../index.css'
import profileImg from './src/profile_img.png'

export const config = {
    label: 'Welter',
    headerOrder: 3,
    path: '/welter',
    showHeader: false,
    showInMenu: false,
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbZPHmDxTZvDnwuZuILK8GNwDiS6w5AWjGT1uxhVHvqICehRLczNeWf0TcOaKFfkTq7Ons0oEYiqjY/pub?output=csv'

export default function WelterPage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Papa.parse(SHEET_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: ({ data }) => {
                const grouped = data.reduce((acc, row) => {
                    const date = row.Data
                    if (!acc[date]) acc[date] = []
                    acc[date].push(row)
                    return acc
                }, {})
                setData(grouped)
                setLoading(false)
            }
        })
    }, [])

    if (loading) return <p>Carregando...</p>

    function formatDate(dateStr) {
        const [day, month, year] = dateStr.split('/')
        const date = new Date(year, month - 1, day)
        const today = new Date()
        const yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)

        const isSameDay = (a, b) =>
            a.getDate() === b.getDate() &&
            a.getMonth() === b.getMonth() &&
            a.getFullYear() === b.getFullYear()

        if (isSameDay(date, today)) return 'Hoje'
        if (isSameDay(date, yesterday)) return 'Ontem'
        return dateStr
    }

    return (
        <S.Main>
            <S.MessagesBody>
                {Object.entries(data).map(([date, messages]) => (

                    <S.DayGroup key={date}>
                        <S.Day>{formatDate(date)}</S.Day>

                        <S.Messages>
                            <img src={profileImg}/>

                            <S.MessagesG>
                                {messages.map((msg, i) => (
                                    <S.Message key={i}>
                                        <p>{msg.Mensagem}<S.Spacer /></p>
                                        <span>
                                            <span>{msg.Hora}</span>
                                        </span>
                                    </S.Message>
                                ))}
                            </S.MessagesG>
                        </S.Messages>
                    </S.DayGroup>

                ))}
            </S.MessagesBody>
        </S.Main>
    )
}