import { companyData } from "@/app/static/json";

function Heading4() {
    return (
        <section className="block lg:flex items-center space-y-4 lg:space-x-8">
            <div className="lg:w-[52%]">
                <h2 className="text-3xl font-semibold text-secondary mb-2">
                    แสลทปูพื้นคอนกรีตสำเร็จรูป
                </h2>
                <p className="text-lg">
                    แสลทปูพื้นสำเร็จรูป ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                    โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                    และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย {companyData.name_th} ยังมีแสลทปูพื้น มีให้เลือก หลายแบบ
                    หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
                </p>
            </div>
            <img src="/images/products_service/2/1.jpg" alt="แสลทปูพื้นคอนกรีตสำเร็จรูป"
                className="w-full lg:w-[48%] h-[200px] lg:h-[300px] object-cover object-left rounded-md" loading="lazy" />
        </section>
    );
}

export default Heading4;