async function transProductType(productType: string) {
    try {
        console.log('productType', productType)
        switch (productType) {
            case 'trough':
                return 'รางระบายน้ำ'
            case 'trough-cover':
                return 'ฝารางระบายน้ำ'
            case 'steel-grating-cover':
                return 'ฝาตะแกรงเหล็ก'
            case 'stake':
                return 'เสาเข็ม แผ่นพื้น เสาไอ'
            default:
                return 'ไม่ระบุ'
        }
    } catch (err) {
        console.log(err)
        return []
        // throw new Error('Failed to fetch data')
    }
}

export default transProductType