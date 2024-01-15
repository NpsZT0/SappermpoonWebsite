'use client'
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Trough3d = dynamic(() => import("./components/Trough"), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

function Trough3dPage() {
    return (
        <div className="flex items-center justify-center h-svh lg:h-screen py-[5%] bg-base-200">
            <div className="flex items-center justify-center w-[80%] h-full border-2 border-slate-500 rounded-md bg-slate-900">
                <Trough3d />
            </div>
            <div className="hidden lg:block absolute top-50 right-[12%]">
                <kbd className="kbd kbd-sm block">
                    <div className="text-center text-xl font-bold">+</div>
                    <div className='w-[25px] h-[44px] rounded-3xl border-4 border-slate-400 flex justify-center items-start p-1'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-[8px] h-[8px] rounded-full bg-slate-400 mb-1'
                        />
                    </div>
                    <div className="text-center text-xl font-bold">-</div>
                </kbd>
            </div>
        </div>
    );
}

export default Trough3dPage;