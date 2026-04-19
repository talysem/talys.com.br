import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../../index.css'

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    padding-top: 10px;
    backdrop-filter: blur(7px);
    background: rgba(16, 16, 16, .5);
`

export const NavItems = styled.nav`
    width: var(--main_width);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #202020;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .25);
    border: solid 1px rgba(255, 255, 255, .05);
    border-radius: 20px;
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    color: var(--color_white_text);
    text-decoration: unset;
    border-bottom: solid 1px transparent;

    &:hover {
        border-bottom: solid 1px rgba(255, 255, 255, 1);
    }
`