

import { StyledBasicBtn } from './Shared.Styles'

export const BasicBtn = ( { text, isDisabled, color, bgColor, type, onClick } ) => {

    return (
        <StyledBasicBtn 
        onClick={onClick}
        type={type}
        isDisabled={isDisabled} 
        color={color} 
        bgColor={bgColor}
        >
        {text}
        </StyledBasicBtn>
    )
}