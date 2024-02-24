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
            <ProjectShowcase/>
        </div>
    )
}

export default App;