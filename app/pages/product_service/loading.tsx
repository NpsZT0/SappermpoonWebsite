export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">

                {/* Article 1 */}
                <article className="mb-32 lg:col-span-8">
                    <div className="flex-grow mb-8 break-words sm:mx-8 ">

                        {/* Introduction */}
                        <div className="py-8 border-b border-gray-200">
                            <div className="skeleton self-start sm:w-[15rem] sm:h-[2rem] w-[12rem] h-[1.5rem] bg-slate-300">
                            </div>
                            <div className="w-auto h-[10px] skeleton self-start bg-slate-300 mt-2">
                            </div>
                            <div className="w-auto h-[10px] skeleton self-start bg-slate-300 mt-2">
                            </div>
                            <div className="w-2/3 h-[10px] skeleton self-start bg-slate-300 mt-2">
                            </div>
                            <div className="w-full h-[20rem] skeleton bg-slate-300 mt-4">
                            </div>
                        </div>

                        {/* Product 1 */}
                        <div className="py-8 border-b border-gray-200">
                            <h2 className="skeleton self-start sm:w-[15rem] sm:h-[2rem] w-[12rem] h-[1.5rem] bg-slate-300">
                            </h2>
                            <div className="skeleton w-auto h-[10px] self-start bg-slate-300 mt-2">
                            </div>
                            <div className="skeleton w-auto h-[10px] self-start bg-slate-300 mt-2">
                            </div>
                            <div className="skeleton w-2/3 h-[10px] self-start bg-slate-300 mt-2">
                            </div>
                            <div className="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-4">
                                <div className="col-span-4 col-start-1 overflow-hidden skeleton w-full h-full bg-slate-300">
                                </div>
                                <div className="col-span-2 col-end-7 overflow-hidden skeleton w-full h-full bg-slate-300">
                                </div>
                                <div className="col-span-3 col-start-1 overflow-hidden skeleton w-full h-full bg-slate-300">
                                </div>
                                <div className="col-span-1 col-start-4 overflow-hidden skeleton w-full h-full bg-slate-300">
                                </div>
                                <div className="col-span-2 col-end-7 overflow-hidden skeleton w-full h-full bg-slate-300">
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Table of Contents */}
                <aside
                    className="lg:col-span-3 order-first lg:order-last sticky top-[--header-height] backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-[1] lg:z-[0]">
                    <nav className='hidden lg:block'>
                        <div className="border-b border-gray-200 border-dashed lg:py-8 lg:border-0">
                            <div className="skeleton w-2/3 h-[1.5rem] bg-slate-300"></div>
                            <div className='mt-4 space-y-3'>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton ml-4 w-3/4 h-[10px] bg-slate-300'></div>
                                <div className='skeleton ml-4 w-3/4 h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton ml-4 w-3/4 h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton ml-4 w-3/4 h-[10px] bg-slate-300'></div>
                                <div className='skeleton ml-4 w-3/4 h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-full h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-4/5 h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-4/5 h-[10px] bg-slate-300'></div>
                                <div className='skeleton w-4/5 h-[10px] bg-slate-300'></div>
                            </div>
                        </div>
                    </nav >
                </aside >
            </div >
        </div >
    )
}