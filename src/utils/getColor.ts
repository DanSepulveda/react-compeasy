import { AllColors, TextColor } from "../types/color.types"

const getColor = (color: AllColors) => {
    const textColor = Number(color.slice(color.indexOf('-') + 1)) >= 400
        ? `${color.slice(0, color.indexOf('-'))}-50`
        : `${color.slice(0, color.indexOf('-'))}-700`

    return textColor
}

export default getColor