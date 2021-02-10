import styled from 'styled-components'

interface StyleProps {
    ghost?: boolean
    kind?: 'secondary.main' | 'tertiary.main' | 'tertiary.light'
}

const ButtonStyle = styled.button<StyleProps>`
    cursor: pointer;

    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 12px 26px;

    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const DefaultButtonStyle = styled(ButtonStyle)`
    color: ${({ theme }) => `${theme.colors.primary.main.contrastText}`};
    color: ${({ kind, theme }) =>
        kind === 'secondary.main' &&
        `${theme.colors.secondary.main.contrastText}`};
    color: ${({ kind, theme }) =>
        kind === 'tertiary.main' &&
        `${theme.colors.tertiary.main.contrastText}`};
    color: ${({ kind, theme }) =>
        kind === 'tertiary.light' &&
        `${theme.colors.tertiary.light.contrastText}`};

    background-color: ${({ theme }) => `${theme.colors.primary.main.color}`};
    background-color: ${({ kind, theme }) =>
        kind === 'secondary.main' && `${theme.colors.secondary.main.color}`};
    background-color: ${({ kind, theme }) =>
        kind === 'tertiary.main' && `${theme.colors.tertiary.main.color}`};
    background-color: ${({ kind, theme }) =>
        kind === 'tertiary.light' && `${theme.colors.tertiary.light.color}`};
`

export const GhostButtonStyle = styled(ButtonStyle)`
    color: ${({ theme }) => `${theme.colors.primary.main.color}`};
    color: ${({ kind, theme }) =>
        kind === 'secondary.main' && `${theme.colors.secondary.main.color}`};
    color: ${({ kind, theme }) =>
        kind === 'tertiary.main' && `${theme.colors.tertiary.main.color}`};
    color: ${({ kind, theme }) =>
        kind === 'tertiary.light' && `${theme.colors.tertiary.light.color}`};

    background-color: transparent;
`
