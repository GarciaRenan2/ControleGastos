import { ReactNode } from "react"
import { HeaderStyle } from "./styles";

type HeaderProps = {
    title: string
    children?: ReactNode
}

function Header({ title = 'Go Finances', children }: HeaderProps) {
    return (
        <HeaderStyle>
            <header>
                <span>
                    {title}
                </span>
                <nav>
                    {children}
                </nav>
            </header>
    </HeaderStyle>
    )
}

export default Header