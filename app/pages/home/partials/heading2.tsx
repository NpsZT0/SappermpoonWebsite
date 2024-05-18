function Heading2() {
    return (
        <section className="block lg:flex items-center space-y-4 lg:space-x-8">
            <div className="lg:w-[52%]">
                <h2 className="text-3xl font-semibold text-secondary mb-2">
                    รางน้ำคอนกรีตสำเร็จรูป
                </h2>
                <p className="text-lg">
                    รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด 
                    แข็งแรง ใช้เวลาติดตั้งน้อย
                    รักษาความสะอาดง่าย ต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
                </p>
            </div>
            <img src="/images/products_service/1/5.jpg" alt="รางน้ำคอนกรีตสำเร็จรูป"
                className="w-full lg:w-[48%] h-[200px] lg:h-[300px] object-cover object-right rounded-md" loading="lazy" />
        </section>
    );
}

export default Heading2;