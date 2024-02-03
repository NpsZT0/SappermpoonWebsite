//** components */
import Breadcrumbs from '@/app/components/breadcrumbs'
//** functions */
import getMainProducts from '@/app/functions/getMainProducts'
import getImage from '@/app/functions/getImage'
//** types */
import { Key } from 'react'
//** libs */
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProductServicePage({ params }: { params: { productType: string } }) {

    /**  
     * @param {string} productType is a string of product type
     * @param {Promise} productData is a promise of product data
     */
    const productType = params.productType
    const productDatas = await getMainProducts(productType)

    if (productDatas.length === 0) {
        notFound()
    }

    return (
        <div className="flex flex-col h-full w-full p-4 mx-auto">
            {/* <Breadcrumbs current={productType} /> */}
            <div className='flex w-full justify-center'>
                {productDatas ?
                    (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-7">
                            {
                                productDatas.map((productData: any, index: Key) => (
                                    <div key={index} className="w-fit" >
                                        <div className="card w-72 h-auto bg-base-100 shadow-lg">
                                            <figure><img src={`${getImage(productData)}`} alt="pipe" className=' object-cover h-[200px] w-full' /></figure>
                                            <div className="card-body h-auto">
                                                <div className="text-lg font-semibold">{productData.attributes.name}</div>
                                                <p className='text-sm overflow-auto max-h-[50px] truncate'>{productData.attributes.detail}</p>
                                                <div className="card-actions justify-end">
                                                    <Link href={`/product-service/${productType}/${productData.id}`} className="btn btn-primary">ดูเพิ่มเติม</Link>
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










