//** components */
import Breadcrumbs from '@/app/components/breadcrumbs'
//** functions */
import getMainProducts from '@/app/functions/getMainProducts'
import getImage from '@/app/functions/getImage'
//** types */
import { Key } from 'react'
//** libs */
import Link from 'next/link'

export default async function ProductServicePage({ params }: { params: { productType: string } }) {

    /**  
     * @param {string} productType is a string of product type
     * @param {Promise} productData is a promise of product data
     */
    const productType = params.productType
    const productData = await getMainProducts(productType)

    return (
        <div className="flex flex-col h-full w-full p-4 mx-auto">
            <Breadcrumbs />
            <div className='flex w-full justify-center'>
                {productData ?
                    (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-7">
                            {
                                productData.map((trough: any, index: Key) => (
                                    <div key={index} className="w-fit" >
                                        <div className="card w-72 h-auto bg-base-100 shadow-lg">
                                            <figure><img src={`${getImage(trough)}`} alt="pipe" className=' object-cover h-[200px] w-full' /></figure>
                                            <div className="card-body h-auto">
                                                <div className="text-lg font-semibold">{trough.attributes.name}</div>
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
            </div>
        </div>
    )
}










