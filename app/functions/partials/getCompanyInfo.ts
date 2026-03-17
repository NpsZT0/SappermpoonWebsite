// import axios from 'axios'
// import { ICarousel } from '@app/types/carousel'

// export const getCarousel = async (menuType: string): Promise<ICarousel[]> => {
//     try {
//         const params = `fields[0]=${menuType}`
//         const res = await axios.get(`${process.env.STRAPI_URL}/api/menu?${params}`)
//         console.log(res.data.data.attributes[menuType])
//         return res.data.data.attributes[menuType]

//     } catch (err) {
//         console.log(err)
//         return [
//         //   {
//         //     name: string;
//         //     href: string;
//         // }
//         ]
//         // throw new Error('Failed to fetch data')
//     }
// }