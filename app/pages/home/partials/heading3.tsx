function Heading3() {
    return (
        <section className="block lg:flex items-center flex-row-reverse lg:space-x-reverse space-y-4 lg:space-x-8">
            <div className="lg:w-[52%]">
                <h2 className="text-3xl font-semibold text-secondary mb-2">
                    ผนังสำเร็จรูป ระบบ Knockdown
                </h2>
                <p className="text-lg">
                    ระบบ Knockdown ผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก ทำให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย 
                    ประหยัดเวลา ใช้แรงงานในการก่อสร้างน้อย ไม่สิ้นเปลืองวัสดุอื่น สะดวก รวดเร็ว ประหยัดงบประมาณในการก่อสร้าง
                </p>
            </div>
            <img src="/images/products_service/5/1.png" alt="ผนังสำเร็จรูป ระบบ Knockdown"
                className="w-full lg:w-[48%] h-[200px] lg:h-[300px] object-cover object-right rounded-md" loading="lazy" />
        </section>

    );
}

export default Heading3;