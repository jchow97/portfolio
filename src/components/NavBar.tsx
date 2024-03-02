import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import Icon from "./Icon";


function NavBar() {
    return (
        <nav className="container mx-auto p-6">
            <div className="grid grid-cols-4 justify-items-between">
                <div className={"self-center justify-self-end space-x-6"}>
                    <Icon icon={faLinkedin} link={"https://www.linkedin.com/in/jeffreychow97/"}/>
                    <Icon icon={faGithub} link={"https://github.com/jchow97"}/>
                </div>
                <h1 className="text-5xl col-span-2 font-bold justify-self-center md:mb-4">
                    Jeffrey Chow
                </h1>
                <div className={"self-center justify-self-start space-x-6"}>
                    <Icon icon={faEnvelope} link={"mailto:jeffreychow97@gmail.com"}/>
                    <Icon icon={faFilePdf} link={"./JeffreyChowResume_v6.pdf"}/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;