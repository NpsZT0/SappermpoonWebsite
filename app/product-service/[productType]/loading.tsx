export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex items-center justify-center w-full p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5">

                <div className="w-fit" >
                    <div className="card w-80 h-96 bg-base-[50] shadow-xl">
                        <figure><div className="skeleton h-52 w-full"></div></figure>
                        <div className="card-body">
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="card-actions justify-end">
                                <button className="skeleton btn w-20"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-fit" >
                    <div className="card w-80 h-96 bg-base-[50] shadow-xl">
                        <figure><div className="skeleton h-52 w-full"></div></figure>
                        <div className="card-body">
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="card-actions justify-end">
                                <button className="skeleton btn w-20"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-fit" >
                    <div className="card w-80 h-96 bg-base-[50] shadow-xl">
                        <figure><div className="skeleton h-52 w-full"></div></figure>
                        <div className="card-body">
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="card-actions justify-end">
                                <button className="skeleton btn w-20"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-fit" >
                    <div className="card w-80 h-96 bg-base-[50] shadow-xl">
                        <figure><div className="skeleton h-52 w-full"></div></figure>
                        <div className="card-body">
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                            <div className="card-actions justify-end">
                                <button className="skeleton btn w-20"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}