import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface Props {
    icon: IconDefinition;
    link: string;
}

function Icon (props: Props) {
    return (
        <a href={props.link}>
            <FontAwesomeIcon className={"md:text-3xl"} icon={props.icon} />
        </a>
    )
}

export default Icon