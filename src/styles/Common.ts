import {theme} from "./Theme";

type FontProps = {
    family?: string
    color?: string
    weight?: number
    lineHeight?: number
    Fmax?:number
    Fmin?:number
}

export const font = ({family, color, weight, lineHeight, Fmax, Fmin}: FontProps) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.text};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`
