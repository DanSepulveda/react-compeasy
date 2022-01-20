import { Intensity } from "../types/color.types"

const getColor = (intensity: Intensity): 50 | 700 => {
    const textColor = intensity >= 400
        ? 50
        : 700

    return textColor
}

export default getColor