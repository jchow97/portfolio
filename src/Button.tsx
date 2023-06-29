interface Props {
    name: string;
    link: string;
}

function Button(props: Props) {
    return (
        <a href={props.link} className="hover:text-darkGrayishBlue">{props.name}</a>
    )
}

export default Button