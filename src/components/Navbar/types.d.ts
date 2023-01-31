import { ReactNode } from "react"

export interface NavbarProps {
    children: ReactNode
    open: boolean
    activeLink: number
    scrollPosition: number
}