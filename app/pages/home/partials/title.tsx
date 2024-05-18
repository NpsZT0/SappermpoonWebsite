import { companyData } from '@/app/static/json';

function Title() {
    return (
        <section>
            <h1 className="text-5xl font-extrabold text-primary uppercase">
                Company Overview
            </h1>
            <p id="P1" className="text-xl whitespace-pre-line">
                จำหน่าย และให้บริการ สินค้า <strong>คอนกรีต</strong> สำเร็จรูป
                รวมถึงงานออกแบบ และงานก่อสร้าง
                {companyData.name_th}
                มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน
                หรือโรงงาน โปรดรับ {companyData.name_th} เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ
                พร้อมให้คำแนะนำ
                เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน</p>
        </section>
    );
}

export default Title;