export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className=' w-full text-base-content bg-white'>
            <div className="w-full h-[15rem] bg-slate-300"></div>
            <div className="mx-auto">
                <div className="w-auto h-auto p-[40px] lg:p-[80px] space-y-[4rem]">
                    <div>
                        <div className="skeleton rounded-full w-[20rem] lg:w-[40rem] h-[4rem] bg-slate-300">
                        </div>
                        <div className="skeleton w-full h-[15px] bg-slate-300 mt-4"></div>
                        <div className="skeleton w-3/4 h-[15px] bg-slate-300 mt-4"></div>
                    </div>
                    <div className="block lg:flex items-center space-y-4 lg:space-x-8">
                        <div className="lg:w-[52%]">
                            <div className="skeleton w-[15rem] h-[2rem] bg-slate-300 mt-4"></div>
                            <div className="skeleton w-full h-[15px] bg-slate-300 mt-4"></div>
                            <div className="skeleton w-full h-[15px] bg-slate-300 mt-4"></div>
                        </div>
                        <div className="skeleton w-full lg:w-[48%] h-[200px] lg:h-[300px] bg-slate-300 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}