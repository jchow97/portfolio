import Button from "./Button";
import image from "/public/images/logo.svg";

function NavBar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img src={image} alt="" className="object-contain" />
                </div>
                <h3 className="text-4xl font-bold justify-left md:mb-4">
                    Jeffrey Chow
                </h3>

                <div className="hidden space-x-12 md:flex">
                    <Button name="Home"/>
                    <Button name="Projects"/>
                    <Button name="Resume"/>
                    <Button name="Contact"/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;