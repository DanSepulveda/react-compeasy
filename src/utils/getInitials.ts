const getInitials = (text: string) => {
    const initials = text.includes(' ')
        ? (text[0] + text.slice(text.indexOf(' ') + 1, text.indexOf(' ') + 2)).toUpperCase()
        : text.slice(0, 2).toUpperCase()

    return initials
}

export default getInitials