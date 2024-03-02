import ProjectShowcaseImageLeft from "../components/ProjectShowcaseImageLeft";
import ProjectShowcaseImageRight from "../components/ProjectShowcaseImageRight";

function ProjectShowcase() {
    return(<div className="whitespace-pre-line">
            <ProjectShowcaseImageLeft
                imageUrl={"./images/ai_basketball.webp"}
                title={"NBA Predictor"}
                description={
                    [
                        "I made this project to refine what I learned after my co-op in terms of object oriented programming, how to set up a database in my personal project. I tried my hand at database design. It was interesting exploring the different one-to-one, one-to-many, and many-to-many relationships to model the NBA. In my internship with Peloton Technologies, I found Entity Framework to be very helpful, so I translated what I learned into Python, where I used SQLAlchemy to do something very similar. The scraper part of the project further familiarized myself with HTML documents and its hierarchical tree structure.",
                        "All of this work set me up to learn some basic pipelining with Scikit learn and I think this project achieved my ultimate goal of practicing some things I had learned during my internship, doing it in a different language, and working with new libraries."
                    ]
                }
                repoUrl={"https://github.com/jchow97/BasketballPredictor"}
            />
            <ProjectShowcaseImageRight
                imageUrl={"./images/yt_captions_translator_icon.jpg"}
                title={"YouTube Captions Translator"}
                description={
                [
                    "I made this project to explore building chrome extensions. I learn a lot about the security of browsers.",
                    "My initial idea for building this application, was to modify the HTTP response body of the translated captions that was sent back by the YouTube servers. Turns out there are many security flaws to allowing this sort of approach (and rightfully so!).",
                    "After going through a lot of trial and error and documentation reading, I figured out how to implement a real-time captions translator through getting HTTP responses and interacting with the translation API in a way that makes the experience seamless for the user."
                ]}
                repoUrl={"https://github.com/jchow97/yt-captions-translator"}
            />
            <ProjectShowcaseImageLeft
                imageUrl={"./images/portfolio_preview.png"}
                title={"My Personal Portfolio Website"}
                description={
                    [
                        "This is the second version of this website, which I decided to rebuild using React to explore this library. When I was first introduced to React through a school project, I was fascinated by the reusability of components in React projects. Additionally, this project emphasizes TailwindCSS, which I used during my time at Peloton Technologies. Designing this website allowed me to learn more about the TailwindCSS classes and designing my own UI/UX.",
                        "I will be continually adding to this website over time."
                    ]}
                repoUrl={"https://github.com/jchow97/portfolio"}
                />
        </div>
    )
}

export default ProjectShowcase;