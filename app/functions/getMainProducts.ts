import axios from 'axios'

async function getMainProducts(productType: string) {
    try {
        const params = `fields[0]=name&fields[1]=type&filters[type][$eq]=${productType}&populate[image][fields][0]=formats`
        const res = await axios.get(`${process.env.STRAPI_URL}/api/main-products?${params}`)
        return res.data.data

    } catch (err) {
        console.log(err)
        return []
        // throw new Error('Failed to fetch data')
    }
}

export default getMainProducts