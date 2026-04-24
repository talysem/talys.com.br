import * as S from "./styles"
import { useEffect, useState } from 'react'

export default function Header() {
    const modules = import.meta.glob('/src/pages/**/index.jsx', { eager: true })

    const pages = Object.entries(modules)
        .filter(([, mod]) => mod.config && mod.config.showInMenu !== false)
        .map(([path, mod]) => ({
            path: path
                .replace('/src/pages', '')
                .replace('/index.jsx', '') || '/',
            ...mod.config,
        }))

    return (
        <S.Header>
            <S.NavItems id='main_header'>
                {pages.map(({ label, path, headerOrder }) => (
                    <S.NavLink key={path} to={path} style={{ order: headerOrder }}>{label}</S.NavLink>
                ))}
            </S.NavItems>
        </S.Header>
    )
}