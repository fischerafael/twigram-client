import styled from 'styled-components'

interface Props {
    type: 'button' | 'submit' | 'reset'
    ghost?: boolean
    variant?: 'sm' | 'tm' | 'tl'
}

const Button: React.FC<Props> = ({ children, type, ghost, variant }) => {
    if (ghost)
        return (
            <ButtonGhost variant={variant} type={type}>
                {children}
            </ButtonGhost>
        )

    return (
        <ButtonDefault variant={variant} type={type}>
            {children}
        </ButtonDefault>
    )
}

export default Button

interface ButtonStyleProps {
    variant?: 'sm' | 'tm' | 'tl'
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
    cursor: pointer;

    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 12px 26px;

    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};

    color: ${(props) =>
        props.variant === 'sm' && props.theme.colors.secondary.main.color};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const ButtonDefault = styled(ButtonStyle)``
export const ButtonGhost = styled(ButtonStyle)`
    background-color: transparent;
`
