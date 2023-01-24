import { ReactNode } from "react"

export interface TypographyProps {
    children: ReactNode
    color?: string
    size?: string
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    lineHeight?: string
    level?: 1 | 2 | 3 | 4 | 5 | 6
}