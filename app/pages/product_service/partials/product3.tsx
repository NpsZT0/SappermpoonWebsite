import { Hashtag } from "@/app/components";
import Link from "next/link";

function Product3(
    {
        classScroll,
        blueprintsProd3,
        detailsProduct3,
        ids
    }: {
        classScroll: {
            h2: string,
            h4: string
        },
        blueprintsProd3: {
            id: number;
            name: string;
            href: string;
        }[],
        detailsProduct3: {
            uditch_1: {
                size: string;
                thickness: string;
                details: string;
                unit: string;
            };
        }[],
        ids: {
            id: string;
            name: string;
        }[]
    }
) {
    return (
        <div className="mt-8">
            {/* Section 1 */}
            <section id={ids[0].id} className={`section ${classScroll.h2}`}>
                <h2 className="text-2xl font-bold sm:text-3xl text-start">
                    <Hashtag name={ids[0].name} href={`#${ids[0].id}`} />
                </h2>
                <p className="text-gray-500 text-start">
                    แสลทปูพื้นสำเร็จรูป ของ SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                    โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                    และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ หลายขนาด
                    เข้ากับการใช้งานได้อย่างมีคุณภาพ
                </p>
            </section>

            {/* Images */}
            <div className="grid grid-cols-6 grid-rows-1 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-4">
                <div className="col-span-4 col-start-1 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/3/2.jpg" alt="banner5" />
                </div>
                <div className="col-span-2 col-end-7 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/3/3.jpg" alt="banner3" />
                </div>
            </div>

            {/* Section 2 */}
            <section id={ids[1].id} className={`section ${classScroll.h4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                    <Hashtag name={ids[1].name} href={`#${ids[1].id}`} />
                </h4>
                <div className="mt-2 space-y-3">
                    <ul className="leading-5">
                        {blueprintsProd3.map((blueprint, index) => (
                            <li key={index} className="flex text-gray-500 w-fit h-fit">
                                {typeof (blueprint.name) == 'object' || typeof (blueprint.href) == 'object' ? (
                                    <div>
                                        <Link key={index} href={blueprint.href[0]} target="_blank" className="hover:text-primary">
                                            {blueprint.name[0]}
                                        </Link>&nbsp;|&nbsp;
                                        <Link key={index} href={blueprint.href[1]} target="_blank" className="hover:text-primary">
                                            {blueprint.name[1]}
                                        </Link>
                                    </div>
                                ) : (
                                    <div>
                                        <Link key={index} href={blueprint.href} target="_blank" className="hover:text-primary">
                                            {blueprint.name}
                                        </Link>
                                    </div>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-2 h-2 min-w-2 min-h-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
            </section >

            {/* Section 3 */}
            <section id={ids[2].id} className={`section ${classScroll.h4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                    <Hashtag name={ids[2].name} href={`#${ids[2].id}`} />
                </h4>
                <div className="text-2xl text-red-600">
                    อันนี้ตารางผิด เป็นตารางเดียวกับแผ่นสแลทปูน
                </div>
                <div className="mt-2 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-sm">
                                <th></th>
                                <th>ขนาด <strong className="text-gray-600">แผ่นสแลทปูน</strong> SNR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsProduct3.map((item, index) => (
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
                                                    <div className="text-gray-200">
                                                        |
                                                    </div>
                                                    <div className=" text-nowrap">
                                                        ({item.uditch_1.thickness})
                                                    </div>
                                                </>
                                            )}
                                            {item.uditch_1.details && (
                                                <>
                                                    <div className="text-gray-200">
                                                        |
                                                    </div>
                                                    <div className=" text-nowrap">
                                                        ({item.uditch_1.details})
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
        </div>
    );
}

export default Product3;