import { GhostButtonStyle, DefaultButtonStyle } from './styles'

interface Props {
    type: 'button' | 'submit' | 'reset'
    ghost?: boolean
    kind?: 'secondary.main' | 'tertiary.main' | 'tertiary.light'
}

const Button: React.FC<Props> = ({ children, type, ghost, kind }) => {
    if (ghost)
        return (
            <GhostButtonStyle kind={kind} ghost={ghost} type={type}>
                {children}
            </GhostButtonStyle>
        )

    return (
        <DefaultButtonStyle kind={kind} ghost={ghost} type={type}>
            {children}
        </DefaultButtonStyle>
    )
}

export default Button
