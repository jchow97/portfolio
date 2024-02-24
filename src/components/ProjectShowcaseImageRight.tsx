interface Project {
    imageUrl: string;
    title: string;
    description: string;
}

function ProjectShowcaseImageRight(project: Project) {
    return(
        <div
            className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg m-4 flex md:flex-row flex-col items-center">
            <div className="p-4 w-3/4">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="w-1/4">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default ProjectShowcaseImageRight;