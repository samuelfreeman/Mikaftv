

export function SiteFooter() {
    return (
        <footer className="bg-white mt-56  md:-mt-20 border-t">
            <div className="mx-auto max-w-screen-xl space-y-8  py-16 px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="">

                            <img height={"200px"} width={"200px"} src="/MikafLogo2.png" alt="" />

                        </div>




                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900">About</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About Us </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms and Conditions </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">Sitemap </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Advertise with Us </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Programs</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Life Pills </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> VybZone 360 </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">My Community My News </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Mikaf Tv </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">  </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">  </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>

                                <p className="font-medium text-gray-900">Company Name</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Mikaf Multimedia </a>
                                    </li>

                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
                <ul className="flex space-x-4 justify-end    w-full">
                    <h1 className="text-sm">Follow Mikaf TV on:</h1>
                    <li><a href="https://web.facebook.com/mikaftv/"><img height={"50"} width={"20"} src="/facebook.png" alt="" /></a></li>
                    <li><a href="https://www.youtube.com/@mikaftv/"><img height={"50"} width={"20"} src="/youtube.png" alt="" /></a></li>
                    <li><a href=""><img height={"50"} width={"20"} src="/instagram.png" alt="" /></a></li>
                </ul>
            </div>
            <div className="h-20 w-full flex justify-center border-t-2 p-7">

                <p className="text-xs text-md font-bold ">COPYRIGHT &copy;
                    2025 MikafTV. All rights reserved.</p>
            </div>
        </footer>

    )
}