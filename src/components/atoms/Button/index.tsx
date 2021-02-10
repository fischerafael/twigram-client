import styled from 'styled-components'

interface Props {
    type: 'button' | 'submit' | 'reset'
    ghost?: boolean
}

interface StyleProps {
    ghost?: boolean
}

const Button: React.FC<Props> = ({ children, type, ghost }) => {
    return (
        <ButtonStyle ghost={ghost} type={type}>
            {children}
        </ButtonStyle>
    )
}

export default Button

export const ButtonStyle = styled.button<StyleProps>`
    cursor: pointer;

    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 12px 26px;

    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};

    background-color: ${(props) => props.ghost && 'transparent'};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
