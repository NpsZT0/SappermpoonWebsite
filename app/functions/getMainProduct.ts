import axios from 'axios'

async function getMainProduct(productType: string, id: string) {
    try {
        const params = `/${id}?fields[0]=name&fields[1]=type&fields[2]=detail&filters[type][$eq]=${productType}&populate[image][fields][0]=formats`
        const res = await axios.get(`${process.env.STRAPI_URL}/api/main-products${params}`)
        return res.data.data

    } catch (err) {
        console.log(err)
        return []
        // throw new Error('Failed to fetch data')
    }
}

export default getMainProduct