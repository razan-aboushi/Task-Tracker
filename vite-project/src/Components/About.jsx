// import React from 'react'
// import image from './images/image_3.png'
// import mais from './images/Mais.jpeg'
// import tamara from './images/Tamara.jpg'
// import razan from './images/Razan.jpg'
// import majd from './images/majd.png'
// import asma from './images/asma.jpg'
export const About = () => {
    return (<>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        We  reinvent the wheel
                    </h2>
                    <p className="mb-4">
                        We are strategists, designers and developers. Innovators and problem
                        solvers. Small enough to be simple and quick, but big enough to deliver
                        the scope you want at the pace you need. Small enough to be simple and
                        quick, but big enough to deliver the scope you want at the pace you
                        need.
                    </p>
                    <p>
                        We are strategists, designers and developers. Innovators and problem
                        solvers. Small enough to be simple and quick.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"
                    />
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our team
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Explore the whole collection of open-source web components and elements
                        built with the utility classes from Tailwind
                    </p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            // src={tamara}
                            alt="Bonnie Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Tamara Banighanem</a>
                        </h3>
                        <p>Software Engineer</p>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            // src={mais}
                            alt="Helene Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Mais Ghaith</a>
                        </h3>
                        <p>Full Stack developer</p>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            // src={razan}
                            alt="Jese Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Razan</a>
                        </h3>
                        <p>FrontEnd developer</p>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            src=""
                            alt="Joseph Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Majdi shomali</a>
                        </h3>
                        <p>BackEnd developer</p>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            src=""
                            alt="Sofia Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Mahmoud Hassan</a>
                        </h3>
                        <p>Web Designer</p>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            // src={majd}
                            alt="Leslie Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Majd Foudeh</a>
                        </h3>
                        <p>Graphic Designer</p>

                    </div>

                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                            // src={asma}
                            alt="Neil Avatar"
                        />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Asmas</a>
                        </h3>
                        <p>js Developer</p>

                    </div>
                </div>
            </div>
        </section>

    </>
    )
}