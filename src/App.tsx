import NavBar from './components/NavBar';
import Introduction from './sections/Introduction';
import UnderConstruction from "./UnderConstruction";
import ProjectShowcase from "./sections/ProjectShowcase";

function App() {
    return (
        <div>
            <NavBar />
            <UnderConstruction />
            <Introduction />
            <h2 className="flex justify-center pt-6 text-3xl font-bold md:text-4xl">
                My Projects
            </h2>
            <ProjectShowcase/>
        </div>
    )
}

export default App;