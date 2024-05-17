import type { Metadata } from 'next'

export const metadata: Metadata = {
    // viewport: 'width=device-width, initial-scale=1.0',
    title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
    keywords: 'Precast Concrete',
    openGraph: {
        title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
        description: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
        url: 'https://nextjs.org',
        siteName: 'Sappermpoon',
        images: [
            {
                url: 'https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'th_TH',
        type: 'website',
    },
}

export default function ProductServiceLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}