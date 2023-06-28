import image from "/public/images/bookstore_pic.jpg"

function Introduction() {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Driven by the opportunity to build cool stuff.
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        I am a Software Engineer with a commitment to learning and growth. I am a
                        4th year Computer Science Student at the University of British Columbia.
                        I love to learn new technologies, and I am currently interested in AI/ML.
                        <br/>
                        <br/>
                        Currently, I am working on an NBA match predictor using Machine Learning.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={image} alt="" className="" />
                </div>
            </div>
        </section>
    )
}

export default Introduction;