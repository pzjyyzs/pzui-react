import styled from "styled-components";
import { BtnColor, BtnShapre, BtnSize, ButtonProps } from "./types";

/* export const BaseBtn = styled.button`
    display: 'inline-flex';
    flex-direction: ${ (props: ButtonProps) => props.isLoading ? 'column' : 'row' };
    align-items: center;
    justify-content: center;
    margin: 0;
    border: none;
    outline: none;
    box-shadow: none;
    text-decoration: none;
    transition-property: 'background';
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 1, 1);
    cursor: pointer;

    :disabled {
        cursor: not-allowed;
        background-color: #f6f6f6;
        color: #afafaf;
    }

    font-size: ${ (props: ButtonProps) => fontStyle[props.size!] };
    line-height: ${ (props: ButtonProps) => lineHeight[props.size!] };
    font-weight: 500;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-radius: ${ (props: ButtonProps) => {
        const { shape, size } = props;
        let val;
        if (shape === BtnShapre.pill) {
            if (size === BtnSize.compact) {
                val = '30px';
            } else if (size === BtnSize.large) {
                val = '42px';
            } else {
                val = '38px';
            }
        } else if (shape === BtnShapre.circle || shape === BtnShapre.round) {
            val = '50%';
        }
        return val;
    }};

    ${ { 'font-size': 12 } }
`; */

/* const fontStyle = { 
    [BtnSize.mini]:  '12px', 
    [BtnSize.default]: '16px', 
    [BtnSize.compact]: '14px', 
    [BtnSize.large]: '18px'
}; */

/* const lineHeight = {
    [BtnSize.mini]:  '16px', 
    [BtnSize.default]: '20px', 
    [BtnSize.compact]: '16px', 
    [BtnSize.large]: '24px'
} */

export const BaseBtn = styled.button<ButtonProps>((props) => ({
    display: 'inline-flex',
    flexDirection:  (props as ButtonProps).isLoading ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    textDecoration: 'none',
    transitionProperty: 'background',
    transitionDuration: '200ms',
    transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: '#f6f6f6',
        color: '#afafaf',
    },
    ...fontStyle(props),
    ...borderRadius(props),
    ...getPaddingStyles(props),
    ...getKindStyles(props),
    ...getShapeStyles(props)
}))

const fontStyle = (props: ButtonProps) => {
    const style = {
        [BtnSize.mini]:  {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 500,
            fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }, 
        [BtnSize.default]: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 500,
            fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }, 
        [BtnSize.compact]: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 500,
            fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }, 
        [BtnSize.large]: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 500,
            fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }
    }

    return style[props.size!];
}

const borderRadius = (props: ButtonProps) => {
    const { shape, size } = props;
    let val;
        if (shape === BtnShapre.pill) {
            if (size === BtnSize.compact) {
                val = '30px';
            } else if (size === BtnSize.large) {
                val = '42px';
            } else {
                val = '38px';
            }
        } else if (shape === BtnShapre.circle || shape === BtnShapre.round) {
            val = '50%';
        }
    return {
        borderRadius: val
    } 
}

const getPaddingStyles = (props: ButtonProps) => {
    const { shape, size } = props;
    const iconShape = shape === BtnShapre.square 
    || shape === BtnShapre.circle 
    || shape === BtnShapre.round;

    switch(size) {
        case BtnSize.mini:
            return {
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: iconShape ? '6px' : '8px',
                paddingRight: iconShape ? '6px' : '8px'
            }
        case BtnSize.compact:
            return {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: iconShape ? '10px' : '12px',
                paddingRight: iconShape ? '10px' : '12px'
            }
        case BtnSize.large: 
            return {
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: iconShape ? '16px' : '20px',
                paddingRight: iconShape ? '16px' : '20px'
            }
        default: 
            return {
                paddingTop: '14px',
                paddingBottom: '14px',
                paddingLeft: iconShape ? '14px' : '16px',
                paddingRight: iconShape ? '14px' : '16px'
            }
    }
}

const getKindStyles = (props: ButtonProps) => {
    const { disabled, kind, isLoading, isSelected } = props;
    if (disabled) {
        return Object.freeze({});
    }

    switch (kind) {
        case BtnColor.primary:
            if (isSelected) {
                return {
                    color: '#ffffff',
                    backgroundColor: '#545454'
                }
            }

            return {
                color: '#ffffff',
                backgroundColor: '#000',
                ':hover': {
                    bakgroundColor: isLoading ? '#545454' : '#333333',
                },
                ':active': {
                    backgroundColor: '#545454'
                }
            }
        case BtnColor.secondary:
            if (isSelected) {
                return {
                    color: '#fff',
                    backgroundColor: '#000'
                }
            }

            return {
                color: '#000',
                backgroundColor: '#eeeeee',
                ':hover': {
                    backgroundColor: isLoading ? '#eeeeee' : '#e2e2e2'
                },
                ':active': {
                    backgroundColor: '#cbcbcb'
                }
            }
        case BtnColor.tertiary: 
            if (isSelected) {
                return {
                    backgroundColor: '#eeeeee',
                    color: '#000'
                }
            }

            return {
                backgroundColor: 'transparent',
                color: '#000',
                ':hover': {
                    backgroundColor: isLoading ? '#eeeeee' : '#f6f6f6'
                },
                ':active': {
                    backgroundColor: '#eeeeee'
                }
            }
        case BtnColor.minimal:
            if (isSelected) {
                return {
                    backgroundColor: '#eeeeee',
                    color: '#000'
                }
            }

            return {
                backgroundColor: 'transparent',
                color: '#000',
                ':hover': {
                    backgroundColor: isLoading ? '#eeeeee' : 'transparent'
                },
                ':active': {
                    backgroundColor: 'transparent'
                }
            }
        default:
            return Object.freeze({});
    }
}

const getShapeStyles = (props: ButtonProps) => {
    const { shape, size } = props;
    if (shape === BtnShapre.circle || shape === BtnShapre.square) {
        let height,width;
        switch (size) {
            case BtnSize.mini: 
                height = '28px';
                width = '28px';
                break;
            case BtnSize.compact:
                height = '36px';
                width = '36px';
                break;
            case BtnSize.large:
                height = '56px';
                width = '56px';
                break;
            default:
                height = '48px';
                width = '48px';
                break;
        }
        return {
            height,
            width,
            padding: 0
        }
    } else {
        return {}
    }
    
       
}
