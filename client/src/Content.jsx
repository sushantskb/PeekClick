import React from "react"

function Content() {
    return (
        <div className="content px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Passon always
                            <br className="hidden md:block" />
                            makes the{' '}
                            <span className="relative px-1">
                                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                <span className="relative inline-block text-deep-purple-accent-400">
                                    heart flutter
                                </span>
                            </span>
                        </h2>
                        <p className="text-base text-black md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                        <div className="bg-purple shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    I'll be sure to note that in my log
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                                    to go on account heave down.
                                </p>
                            </div>
                        </div>
                        <div className="bg-purple shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    A business big enough that it could be listed
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Those options are already baked in with this model shoot me an
                                    email clear.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;