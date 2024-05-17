import getImage from "@/app/functions/getImage"
import getMainProduct from "@/app/functions/getMainProduct"
import Link from "next/link"

async function ProductDetail({ params }: { params: { productType: string, id: string } }) {

    /**  
     * @param {string} productId is a string of product id
     * @param {string} productType is a string of product type
     * @param {Promise} productData is a promise of product data
     */
    const productId = params.id
    const productType = params.productType
    const productData = await getMainProduct(productType, productId)

    return (
        <div className="flex flex-col h-full w-full p-4 mx-auto">
            {/* <Breadcrumbs current={productType} newBread={productData.attributes.name}/> */}
            <div className='flex w-full justify-center'>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-7">

                    <div className="w-fit" >
                        <div className="card w-72 h-auto bg-white shadow-lg">
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

                </div>

            </div>
        </div>
    );
}

export default ProductDetail;