import styled from 'styled-components'

interface Props {
    type: 'button' | 'submit' | 'reset'
    ghost?: boolean
}

const Button: React.FC<Props> = ({ children, type, ghost }) => {
    if (ghost) return <ButtonGhost type={type}>{children}</ButtonGhost>

    return <ButtonDefault type={type}>{children}</ButtonDefault>
}

export default Button

export const ButtonStyle = styled.button`
    cursor: pointer;

    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 12px 26px;

    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};

    background: ${({ theme }) => theme.colors.main};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const ButtonDefault = styled(ButtonStyle)``
export const ButtonGhost = styled(ButtonStyle)`
    background-color: transparent;
`
