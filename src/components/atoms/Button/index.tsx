import styled, { css } from 'styled-components'

interface Props {
    type: 'button' | 'submit' | 'reset'
    ghost?: boolean
}

const Button: React.FC<Props> = ({ children, type }) => {
    return <ButtonStyle type={type}>{children}</ButtonStyle>
}

export default Button

interface ButtonStyleProps {
    ghost?: boolean
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
    cursor: pointer;

    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 12px 26px;

    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};

    ${(props) => (props.ghost ? Ghost : Default)};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`

interface CustomButtonProps {
    variant?: 'pm' | 'sm' | 'tm' | 'tl'
}

const Default = css<CustomButtonProps>`
    color: ${(props) =>
        props.variant === 'tm'
            ? props.theme.colors.tertiary.main.color
            : props.variant === 'tl'
            ? props.theme.colors.tertiary.light.color
            : props.variant === 'sm'
            ? props.theme.colors.secondary.main.color
            : props.theme.colors.secondary.main.color};
    background-color: ${(props) =>
        props.variant === 'tm'
            ? props.theme.colors.tertiary.main.color
            : props.variant === 'tl'
            ? props.theme.colors.tertiary.light.color
            : props.variant === 'sm'
            ? props.theme.colors.secondary.main.color
            : props.theme.colors.secondary.main.color}; ;
`
const Ghost = css<CustomButtonProps>`
    color: ${(props) =>
        props.variant === 'tm'
            ? props.theme.colors.tertiary.main.color
            : props.variant === 'tl'
            ? props.theme.colors.tertiary.light.color
            : props.variant === 'sm'
            ? props.theme.colors.secondary.main.color
            : props.theme.colors.secondary.main.color};
    background-color: transparent;
`
