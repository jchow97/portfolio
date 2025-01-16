
function Introduction() {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg m-4">
                    <div className="flex flex-col content-center mb-10 md:w-1/2 px-16">
                        <h2 className="py-6 max-w-md text-3xl font-bold text-center md:text-4xl md:text-left">
                            Driven by the opportunity to build cool stuff.
                        </h2>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            I am a Software Developer with a commitment to learning and growth. I am a
                            4th year Computer Science Student at the University of British Columbia.
                            Currently, I am working as a Web Developer Co-op at Invoke Media with an expected
                            graduation date of May 2025.
                            I love to learn new technologies and I am currently interested in biotech
                            software and game development.
                            <br/>
                            <br/>
                            Currently, I am working on making a Strategy Game called Project A.
                        </p>
                    </div>
                    <div className="md:w-1/2 py-12 px-10">
                        <img src={"./images/bookstore_pic.jpg"} alt="" className="object-scale-down rounded"/>
                    </div>
                </div>
        </section>
)
}

export default Introduction;