interface Project {
    imageUrl: string;
    title: string;
    description: string[];
    repoUrl: string;
}

function ProjectShowcaseImageRight(project: Project) {
    return(
        <div
            className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg m-4">
            <div className="p-4 md:w-3/4 w-full">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-base">{
                    <div>
                        {project.description.map((desc) => (
                            <div>
                                <text>{desc}</text>
                                <br/>
                                <br/>
                            </div>
                        ))}
                        <text>You can check out the project repo </text>
                        <a href={project.repoUrl} className={"underline"}>
                            here
                        </a>
                        <text>.</text>
                    </div>
                }
                    <br/>
                </p>

            </div>
            <div className="md:w-1/4 w-full py-6 pr-4">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-scale-down"/>
            </div>
        </div>
    )
}

export default ProjectShowcaseImageRight;