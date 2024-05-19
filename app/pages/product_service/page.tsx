'use client';
//** libraries */
import { useEffect } from 'react';

//** data */
import {
    blueprintsProd1,
    blueprintsProd3,
    detailsProduct1,
    detailsProduct2,
    detailsProduct3,
    tableOfContents,
} from '@/app/static/json';

//** partials */
import {
    Product1,
    Product2,
    Product3,
    TableOfContent
} from './partials';

//** components */
import {
    Carousel,
    ScrollToTopButton
} from '@/app/components';

interface IProductIds {
    id: string;
    name: string;
};


export default async function ProductServicePage() {
    // Variables
    const product1Ids: IProductIds[] = [
        {//section1
            id: tableOfContents[0].id,
            name: tableOfContents[0].name
        },
        {//section2 (children1 of section1)
            id: tableOfContents[0].children![0].id,
            name: tableOfContents[0].children![0].name
        },
        {//section3 (children2 of section1)
            id: tableOfContents[0].children![1].id,
            name: tableOfContents[0].children![1].name
        }
    ];
    const product2Ids: IProductIds[] = [
        {
            id: tableOfContents[1].id,
            name: tableOfContents[1].name
        },
        {
            id: tableOfContents[1].children![0].id,
            name: tableOfContents[1].children![0].name
        }
    ];
    const product3Ids: IProductIds[] = [
        {
            id: tableOfContents[2].id,
            name: tableOfContents[2].name
        },
        {
            id: tableOfContents[2].children![0].id,
            name: tableOfContents[2].children![0].name
        },
        {
            id: tableOfContents[2].children![1].id,
            name: tableOfContents[2].children![1].name
        }
    ];
    const classScroll = {
        h2: 'scroll-mt-[calc(40px+40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]',
        h4: 'scroll-mt-[calc(30px+30px+var(--header-height))] lg:scroll-mt-[calc(30px+var(--header-height))]'
    };
    const carouselLinks = [
        {
            src: "/images/products_service/1/2.jpg",
            alt: "รางน้ำคอนกรีตสำเร็จรูป",
        },
        {
            src: "/images/products_service/2/5.jpg",
            alt: "ผนังสำเร็จรูป ระบบ Knockdown",
        },
        {
            src: "/images/products_service/3/2.jpg",
            alt: "แสลทปูพื้นคอนกรีตสำเร็จรูป",
        },
        {
            src: "/images/products_service/4/3.jpg",
            alt: "ระบบ เสา คาน ตอม่อ สำเร็จรูป",
        },
        {
            src: "/images/products_service/5/5.jpg",
            alt: "สแลทพ่อพันธุ์ สแลทคอกคลอด ผนังคอกหมูขุน",
        },
        {
            src: "/images/products_service/6/4.jpg",
            alt: "รั้วและกำแพงคอนกรีตสำเร็จรูป",
        },
    ];
    useEffect(() => {
        const scrollSpy = () => {
            const navTopHeight = 72 + 40;
            const menuItems: any = document.querySelectorAll(".link-items");
            const scrollItems: any = document.querySelectorAll(".section");
            let fromTop = window.pageYOffset + navTopHeight + 40;
            let cur: any = [];
            let lastId;
            [...scrollItems].forEach(function (item: any) {
                if (item.offsetTop < fromTop) {
                    cur.push(item);
                }
            });

            cur = cur[cur.length - 1];
            let id = cur ? cur.id : "";

            // Assuming lastId is defined in the component's data
            if (lastId !== id) {
                lastId = id;

                if (menuItems.length) {
                    menuItems.forEach(function (elem: any, index: any) {
                        elem.classList.remove("text-primary");

                        const filteredItems = [...menuItems].filter(elem => elem.getAttribute("href").slice(22) === `#${id}`);
                        if (filteredItems.length > 0) {
                            filteredItems[0].classList.add("text-primary");
                        }
                    });
                }
            }
        }

        window.addEventListener('scroll', scrollSpy)
    }, []);

    return (
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">

                {/* Article 1 */}
                <article className="mb-32 lg:col-span-8">
                    <div className="flex-grow mb-8 break-words sm:mx-8 ">

                        {/* Introduction */}
                        <div className="py-8 border-b border-gray-200">
                            <h1 className="text-3xl font-bold sm:text-4xl text-start text-primary">
                                สินค้าและบริการ
                            </h1>
                            <p className="text-gray-500 text-start mt-2">
                                สร้างโลกของความแข็งแกร่งและคุณภาพด้วยวัสดุก่อสร้างจากเรา!
                                เราเสนอสินค้าที่มีคุณภาพสูงที่สุดและมาพร้อมกับความคุ้มค่าที่ยอดเยี่ยม
                                ไม่ว่าคุณกำลังก่อสร้างบ้านหรือโครงการใหญ่ ๆ เรามีทุกอย่างที่คุณต้องการเพื่อให้โครงการของคุณประสบความสำเร็จ
                            </p>
                            <div className="p-2 mt-4 rounded-md lg:p-4 bg-gray-300/75">
                                <Carousel links={carouselLinks} />
                            </div>
                        </div>

                        {/* Product 1 */}
                        <Product1 classScroll={classScroll} blueprintsProd1={blueprintsProd1} detailsProduct1={detailsProduct1} ids={product1Ids} />

                        {/* Product 2 */}
                        <Product2 classScroll={classScroll} detailsProduct2={detailsProduct2} ids={product2Ids} />

                        {/* Product 3 */}
                        <Product3 classScroll={classScroll} blueprintsProd3={blueprintsProd3} detailsProduct3={detailsProduct3} ids={product3Ids} />
                    </div>
                </article>

                {/* Table of Contents */}
                <TableOfContent />

                {/* < !--Scroll to top-- > */}
                <ScrollToTopButton />
            </div >
        </div >
    )
}










