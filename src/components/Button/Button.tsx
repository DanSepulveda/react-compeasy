import '../../styles.css'
import React from "react"
import ComponentProps from './Button.types'
import StyledButton from './styled/StyledButton'
import getColor from '../../utils/getColor'

const Button: React.FC<ComponentProps> = ({ children, variant, size, onClick, disabled, rounded, className, label, color = 'sky-700' }) => {
    const textColor = getColor(color)

    return (
        <StyledButton
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            rounded={rounded}
            label={label}
            className={className}
            color={color}
            textColor={textColor}
        >
            {children || label}
        </StyledButton>
    )
};

Button.defaultProps = {
    children: null,
    variant: 'filled',
    size: 20,
    onClick: () => { },
    disabled: false,
    rounded: false,
    label: '',
    className: '',
    color: 'sky-700',
}

export default Button;