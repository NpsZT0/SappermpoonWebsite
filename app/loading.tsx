export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className=' w-full text-base-content'>
            <div className="skeleton bg-base-content h-[380px] mx-4">
            </div>
            <div className='flex flex-col items-start justify-start mx-4 py-10'>
                {/* <Framer /> */}
                <div className="block items-start space-y-4 ">
                    <div className="skeleton bg-base-content h-[60px] w-[800px]"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[800px]"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[800px] items-start"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[700px]"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[800px]"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[800px] items-start"></div>
                    <div className="skeleton bg-base-content h-[20px] w-[700px]"></div>
                </div>
            </div>
        </div>
    )
}