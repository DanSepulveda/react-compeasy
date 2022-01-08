const getColor = (color: string) => {
    const textColor = Number(color.slice(color.indexOf('-') + 1)) >= 400
        ? `${color.slice(0, color.indexOf('-') + 1)}50`
        : `${color.slice(0, color.indexOf('-') + 1)}700`

    return textColor
}

export default getColor