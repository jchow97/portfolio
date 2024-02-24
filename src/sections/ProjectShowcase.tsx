import ProjectShowcaseImageLeft from "../components/ProjectShowcaseImageLeft";

function ProjectShowcase() {
    return(
        <ProjectShowcaseImageLeft imageUrl={"./images/ai_basketball.webp"} title={"NBA Predictor"} description={
            `I made this project to refine what I learned after my co-op in terms of object oriented programming, how to set up a database in my personal project.

I tried my hand at database design. It was interesting exploring the different one-to-one, one-to-many, and many-to-many relationships to model the NBA. In my internship with Peloton Technologies, I found Entity Framework to be very helpful, so I translated what I learned into Python, where I used SQLAlchemy to do something very similar.

The scraper part of the project further familiarized myself with HTML documents and its hierarchical tree structure.

All of this work set me up to learn some basic pipelining with Scikit learn and I think this project achieved my ultimate goal of practicing some things I had learned during my internship, doing it in a different language, and working with new libraries.`
        }/>
    )
}

export default ProjectShowcase;