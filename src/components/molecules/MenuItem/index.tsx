interface Props {
    url: string
    name: string
}

const MenuItem: React.FC<Props> = ({ url, name }) => {
    return (
        <li key={url}>
            <a href={url}>{name}</a>
        </li>
    )
}

export default MenuItem
