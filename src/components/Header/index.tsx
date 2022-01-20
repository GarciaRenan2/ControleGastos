import { ReactNode } from "react"
import "./styles.css"

type HeaderProps = {
    title: string
    children?: ReactNode
}

function Header({ title = 'Go Finances', children }: HeaderProps) {
    return (
        <div>
            <header id="header">
                <span>
                    {title}
                </span>
                <nav>
                    {children}
                </nav>
            </header>
        </div>
    )
}

export default Header