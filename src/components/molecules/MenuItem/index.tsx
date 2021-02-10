import styled from 'styled-components'

interface Props {
    url: string
    name: string
}

const MenuItem: React.FC<Props> = ({ url, name }) => {
    return (
        <>
            <ManuItemStyle key={url} href={url}>
                {name}
            </ManuItemStyle>
        </>
    )
}

export default MenuItem

export const ManuItemStyle = styled.a`
    text-align: center;
    display: block;

    text-decoration: none;

    color: #88989e;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
        font-weight: 500;
        color: #070c0e;
    }
`
