import '../../styles.css'
import React from 'react'
import ComponentProps from './Button.types'
import StyledButton from './styled/StyledButton'
import getColor from '../../utils/getColor'

const Button: React.FC<ComponentProps> = ({
    children = null,
    variant = 'filled',
    size = 20,
    onClick = undefined,
    disabled = false,
    rounded = false,
    label = undefined,
    type = 'submit',
    className = undefined,
    color = 'teal',
    intensity = 400
}): JSX.Element => {
    const textColor = getColor(intensity)

    return (
        <StyledButton
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            rounded={rounded}
            type={type}
            className={className}
            color={color}
            intensity={intensity}
            textColor={textColor}
        >
            {children || label}
        </StyledButton>
    )
}

export default Button