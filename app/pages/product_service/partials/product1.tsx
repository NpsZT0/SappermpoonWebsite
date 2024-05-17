import Hashtag from "@/app/components/hashtag";
import Link from "next/link";

function Product1(
    {
        classScrollH2,
        classScrollH4,
        blueprintsProd1,
        detailsProduct1
    }: {
        classScrollH2: string,
        classScrollH4: string,
        blueprintsProd1: ({
            id: string;
            name: string;
            href: string;
        } | {
            id: string;
            name: string[];
            href: string[];
        })[],
        detailsProduct1: {
            uditch_1: {
                size: string;
                thickness: string;
                details: string;
                unit: string;
            };
            uditch_2: {
                size: string;
                thickness: string;
                details: string;
                unit: string;
            };
        }[]
    }) {
    return (
        <div className="mt-8">
            {/* Section 1 */}
            <section id="รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" className={`section ${classScrollH2}`}>
                <h2 className="text-2xl font-bold sm:text-3xl text-start">
                    <Hashtag name="รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด" href="#รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" />
                </h2>
                <p className="text-gray-500 text-start">
                    รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน
                    สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด
                    ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
                </p>
            </section>

            {/* Images */}
            <div className="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-2">
                <div className="col-span-4 col-start-1 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/5.jpg" alt="banner5" />
                </div>
                <div className="col-span-2 col-end-7 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/3.jpg" alt="banner3" />
                </div>

                <div className="col-span-3 col-start-1 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/6.jpg" alt="banner6" />
                </div>
                <div className="col-span-1 col-start-4 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/4.jpg" alt="banner4" />
                </div>
                <div className="col-span-2 col-end-7 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/7.jpg" alt="banner7" />
                </div>
            </div>

            {/* Section 2 */}
            <section id="ตัวอย่าง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-บริษัทสยามน้ำรินจำกัด" className={`section ${classScrollH4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                    <Hashtag name="ตัวอย่าง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ บริษัทสยามน้ำรินจำกัด"
                        href="#ตัวอย่าง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-บริษัทสยามน้ำรินจำกัด" />
                </h4>
                <div className="mt-2 space-y-3">
                    <ul className="leading-5 ">
                        {blueprintsProd1.map((blueprint, index) => (
                            <li key={index} className="flex text-gray-500 w-fit h-fit">
                                {typeof (blueprint.name) == 'object' || typeof (blueprint.href) == 'object' ? (
                                    <>
                                        <Link href={blueprint.href[0]} target="_blank" className="hover:text-primary">
                                            {blueprint.name[0]}
                                        </Link>&nbsp;|&nbsp;
                                        <Link href={blueprint.href[1]} target="_blank" className="hover:text-primary">
                                            {blueprint.name[1]}
                                        </Link>
                                    </>
                                ) : (
                                    <Link href={blueprint.href} target="_blank" className="hover:text-primary">
                                        {blueprint.name}
                                    </Link>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-2 h-2 min-w-2 min-h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div >
            </section >

            {/* Section 3 */}
            <section id="ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" className={`section ${classScrollH4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                    <Hashtag name="ตาราง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ SNR (บางส่วน)"
                        href="#ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" />
                </h4>
                <div className="mt-2 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-sm">
                                <th></th>
                                <th>ขนาด <strong className="text-gray-600">รางน้ำคอนกรีต</strong> SNR</th>
                                <th>ขนาด <strong className="text-gray-600">ฝารางน้ำคอนกรีต</strong> SNR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsProduct1.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex space-x-2">
                                            <div className="flex space-x-2 text-nowrap">
                                                {item.uditch_1.size != '-' ? (
                                                    <div>
                                                        {item.uditch_1.size} {item.uditch_1.unit}.
                                                    </div>
                                                ) : (
                                                    <div>{item.uditch_1.size}</div>
                                                )}
                                            </div>
                                            {item.uditch_1.thickness && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className="text-nowrap">
                                                        หนา
                                                        {item.uditch_1.thickness} {item.uditch_1.unit}.
                                                    </div>
                                                </>
                                            )}
                                            {item.uditch_1.details && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">{item.uditch_1.details}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex space-x-2">
                                            <div className="flex space-x-2 text-nowrap">
                                                {item.uditch_2.size != '-' ? (
                                                    <div>
                                                        {item.uditch_2.size} {item.uditch_2.unit}.
                                                    </div>
                                                ) : (
                                                    <div >{item.uditch_2.size}</div>
                                                )}
                                            </div>
                                            {item.uditch_2.thickness && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">
                                                        หนา {item.uditch_2.thickness} {item.uditch_1.unit}.
                                                    </div>
                                                </>
                                            )}
                                            {item.uditch_2.details && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">
                                                        {item.uditch_2.details}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div >
    );
}

export default Product1;