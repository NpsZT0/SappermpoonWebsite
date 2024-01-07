import { Key } from 'react'
import Link from 'next/link'

import getMainProducts from '@/app/functions/getMainProducts'
import getImage from '../../functions/getImage'


async function SlateCalve({ productType }: { productType: string }) {

    const troughs = await getMainProducts(productType)

    return (
        <>
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
                                            {/* <p className=' overflow-auto max-h-[50px]'>{trough.attributes.type}</p> */}
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
        </>
    );
}

export default SlateCalve;