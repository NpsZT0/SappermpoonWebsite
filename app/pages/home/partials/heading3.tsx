function Heading3() {
    return (
        <section className="flex items-center flex-row-reverse space-x-reverse space-x-8">
            <div className="w-[52%]">
                <h2 className="text-2xl font-semibold text-secondary">
                    ผนังสำเร็จรูป ระบบ Knockdown
                </h2>
                <p className="text-lg">
                    ระบบ Knockdown ผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก ด้วยการออกแบบในระบบ
                    Knockdown ทำ
                    ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา ใช้แรงงานในการก่อสร้างน้อย ไม่สิ้นเปลืองวัสดุอื่น
                    (เช่น
                    ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว ประหยัดงบประมาณในการก่อสร้าง
                </p>
            </div>
            <img src="/images/products_service/5/1.png" alt="ผนังสำเร็จรูป ระบบ Knockdown"
                className="w-[48%] h-[200px] lg:h-[300px] object-cover object-right rounded-md" loading="lazy" />
        </section>

    );
}

export default Heading3;