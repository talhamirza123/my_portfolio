import React  from "react";
import { Children } from "react";
import './Button.css';

const Styles = [
    'btn-primary',
    'btn-outline'
    
]

const Sizes = [
    'btn--medium',
    'btn--large'
]

export const button = ({
    Children,
    type,
    onClick,
    buttonStyle,
    buttonsize
    
})  => {

const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]

const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0]
    
    return (
        
        <button>
        {Children}
        </button>
        
    )
    
}
