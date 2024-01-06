import Link from 'next/link'
import { Key } from 'react'
import axios from 'axios'

async function getTroughs() {
    try {
        const res = await axios.get(`${process.env.STRAPI_URL}/api/main-products?populate=*`)
        return res.data.data

    } catch (err) {
        console.log(err)
        return []
        // throw new Error('Failed to fetch data')
    }
}

export default async function ProductServicePage({ params }: { params: { productType: string } }) {
    const troughs = await getTroughs()
    const productType = params.productType
    const getImage = (trough: {
        attributes: {
            name: string;
            type: string;
            image: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            };
                            small: {
                                url: string;
                            };
                            large: {
                                url: string;
                            };
                            medium: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    }, size: string = 'small') => {
        switch (size) {
            case 'thumbnail':
                return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.thumbnail.url}`
            case 'small':
                return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.small.url}`
            case 'large':
                return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.large.url}`
            case 'medium':
                return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.medium.url}`
        }
    }
    return (
        <>
            {
                productType === 'trough' ?
                    (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            {troughs ?
                                (
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-7">
                                        {
                                            troughs.map((trough: any, index: Key) => (
                                                <div key={index} className="w-fit" >
                                                    <div className="card w-72 h-auto bg-base-[50] shadow-xl">
                                                        <figure><img src={`${getImage(trough)}`} alt="pipe" className=' object-cover h-[200px] w-full' /></figure>
                                                        <div className="card-body h-auto">
                                                            <h2 className="card-title">{trough.attributes.name}</h2>
                                                            <p className=' overflow-auto max-h-[50px]'>{trough.attributes.type}</p>
                                                            <div className="card-actions justify-end">
                                                                <Link href={`/test`} className="btn btn-primary">ดูเพิ่มเติม</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <h1>ไม่มีข้อมูล</h1>
                                )
                            }
                        </div>
                    ) : productType === 'slate-floor' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, แผ่นสแลทปูพื้นคอกสำเร็จรูป!</h1>
                        </div>
                    ) : productType === 'slate-breeder' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, สแลทพ่อพันธุ์!</h1>
                        </div>
                    ) : productType === 'slate-calve' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, สแลทคอกคลอด!</h1>
                        </div>
                    ) : productType === 'wall-calve' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, ผนังคอกคลอด!</h1>
                        </div>
                    ) : productType === 'wall-pig' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, ผนังคอกหมูขุน!</h1>
                        </div>
                    ) : productType === 'slate-knockdown' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, ผนังสำเร็จรูป ระบบ Knockdown สำหรับกั้นคอก!</h1>
                        </div>
                    ) : productType === 'pillar-beams-pier' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, ระบบ เสา คาน ตอม่อ สำเร็จรูป!</h1>
                        </div>
                    ) : productType === 'stake' ? (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, เสาเข็ม แผ่นพื้น สิ้นค้าจิปาถะ!</h1>
                        </div>
                    ) : productType === 'fence' && (
                        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
                            <h1>Hello, รั้วและกำแพงกันดิน คอนกรีตสำเร็จรูป!</h1>
                        </div>
                    )
            }
        </>
    )
}










