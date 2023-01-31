import { ReactNode } from "react"
import theme from "@/styles/theme"

export interface TypographyProps {
    children: ReactNode
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    lineHeight?: string
    level?: 1 | 2 | 3 | 4 | 5 | 6
}