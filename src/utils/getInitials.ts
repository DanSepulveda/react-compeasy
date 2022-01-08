const getInitials = (text: string) => {
    const initials = text.includes(' ')
        ? text[0] + text.slice(text.indexOf(' ') + 1, text.indexOf(' ') + 2)
        : text.slice(0, 2)

    return initials
}

export default getInitials