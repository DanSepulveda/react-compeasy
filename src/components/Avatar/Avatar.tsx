import '../../styles.css'
import React from 'react'
import ComponentProps from './Avatar.types'
import StyledAvatar from './styled/StyledAvatar'
import getColor from '../../utils/getColor'
import getInitials from '../../utils/getInitials'

const Avatar: React.FC<ComponentProps> = ({
    size = 60,
    shape = 'circle',
    src = undefined,
    initials = undefined,
    onClick = undefined,
    className = undefined,
    color = 'sky',
    intensity = 700
}) => {
    const textColor = getColor(intensity)
    const newInitials = initials && getInitials(initials)

    return (
        <StyledAvatar
            size={size}
            shape={shape}
            src={src}
            onClick={onClick && onClick}
            className={className}
            color={color}
            intensity={intensity}
            textColor={textColor}
        >
            {(initials && !src) && newInitials}
        </StyledAvatar >
    )
};

export default Avatar;