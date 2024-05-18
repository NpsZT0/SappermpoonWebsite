function Heading2() {
    return (
        <section className="flex items-center space-x-8">
            <div className="w-[52%]">
                <h2 className="text-2xl font-semibold text-secondary">
                    รางน้ำคอนกรีตสำเร็จรูป
                </h2>
                <p className="text-lg">
                    รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของ SNR มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย
                    รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
                </p>
            </div>
            <img src="/images/products_service/1/5.jpg" alt="รางน้ำคอนกรีตสำเร็จรูป"
                className="w-[48%] h-[200px] lg:h-[300px] object-cover object-right rounded-md" loading="lazy" />
        </section>
    );
}

export default Heading2;