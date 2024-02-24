import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import Icon from "./Icon";


function NavBar() {
    return (
        <nav className="container mx-auto p-6">
            <div className="flex grid grid-cols-3 justify-items-between">
                <div className={"self-center justify-self-end space-x-6"}>
                    <Icon icon={faLinkedin} link={"https://www.linkedin.com/in/jeffreychow97/"} />
                    <Icon icon={faGithub} link={"https://github.com/jchow97"} />
                    <Icon icon={faEnvelope} link={"mailto:jeffreychow97@gmail.com"} />
                    <Icon icon={faFilePdf} link={"./JeffreyChowResume_v3.pdf"} />
                </div>
                <h1 className="text-5xl font-bold justify-self-center md:mb-4">
                    Jeffrey Chow
                </h1>
                <div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;