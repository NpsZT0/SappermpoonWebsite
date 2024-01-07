import Trough from '../product-components/trough'
import SlateFloor from '../product-components/slate-floor'
import SlateBreed from '../product-components/slate-breed'
import SlateCalve from '../product-components/slate-calve'
import WallCalve from '../product-components/wall-calve'
import WallPig from '../product-components/wall-pig'
import SlateKnockdown from '../product-components/slate-knockdown'
import PillarBeamsPier from '../product-components/pillar-beams-pier'
import Stake from '../product-components/stake'
import Fence from '../product-components/fence'

export default async function ProductServicePage({ params }: { params: { productType: string } }) {
    const productType = params.productType

    return (
        <div className="flex items-center justify-center h-full w-full p-4 mx-auto">
            {
                productType === 'trough' ?
                    (
                        <Trough productType={productType} />
                    ) : productType === 'slate-floor' ? (
                        <SlateFloor productType={productType} />
                    ) : productType === 'slate-breeder' ? (
                        <SlateBreed productType={productType} />
                    ) : productType === 'slate-calve' ? (
                        <SlateCalve productType={productType} />
                    ) : productType === 'wall-calve' ? (
                        <WallCalve productType={productType} />
                    ) : productType === 'wall-pig' ? (
                        <WallPig productType={productType} />
                    ) : productType === 'slate-knockdown' ? (
                        <SlateKnockdown productType={productType} />
                    ) : productType === 'pillar-beams-pier' ? (
                        <PillarBeamsPier productType={productType} />
                    ) : productType === 'stake' ? (
                        <Stake productType={productType} />
                    ) : productType === 'fence' && (
                        <Fence productType={productType} />
                    )
            }
        </div>
    )
}










