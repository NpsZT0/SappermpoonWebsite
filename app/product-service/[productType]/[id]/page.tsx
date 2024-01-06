// import { useState, useEffect } from 'react'

async function getSpout(id: string) {
    const res = await fetch(`https://6589bfe9324d417152597230.mockapi.io/spout/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function ProductDetail({ params }: { params: { id: string } }) {
    const spout = await getSpout(params.id)
    // const [spout, setSpout] = useState<any>([])

    // const init = async () => {
    //     const result = await getSpout(params.id)
    //     setSpout(result)
    // }

    // useEffect(() => {
    //     init()
    // }, [])
    console.log(spout)

    return (
        <div>
            {spout && spout.description}
        </div>
    );
}

export default ProductDetail;