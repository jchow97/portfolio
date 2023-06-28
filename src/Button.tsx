interface Props {
    name: string;
}

function Button(props: Props) {
    return (
        <a href="#" className="hover:text-darkGrayishBlue">{props.name}</a>
    )
}

export default Button