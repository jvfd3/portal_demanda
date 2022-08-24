import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20, 96]
fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.displayExtraLarge = fontSizes[2]

const colors: any = [
    '#2567B4',
    '#F9B531',
]
colors.primary = colors[0]
colors.secondary = colors[1]

const theme = {
    fontSizes,
    colors
}

type ThemeProps = {
    children: React.ReactNode
}

export const Theme = (props: ThemeProps) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}