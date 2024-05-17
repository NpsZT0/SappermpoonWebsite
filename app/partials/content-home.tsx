import CarouselHome from "../components/carousel";
import ScrollToTopButton from "../components/scroll-to-top";

function ContentHome() {
  return (
    <div className='flex items-center justify-center py-10 px-5 md:px-0'>
      <div className="mx-auto">
        <div className="w-auto h-auto p-8">
          <section>
            <h1 className="text-4xl font-extrabold text-secondary">
              บริษัท สยามน้ำริน จำกัด
            </h1>
            <p id="P1" className="text-xl whitespace-pre-line">
              จำหน่าย และให้บริการ สินค้า <strong>คอนกรีต</strong> สำเร็จรูป
              รวมถึงงานออกแบบ และงานก่อสร้าง
              บริษัทสยามน้ำรินจำกัด
              มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน
              หรือโรงงาน โปรดรับ บริษัทสยามน้ำรินจำกัด เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ
              พร้อมให้คำแนะนำ
              เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน</p>
          </section>
          <br />
          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              สนใจติดต่อสอบถามรายละเอียดได้ที่
            </h2>
            <p className="text-lg">
              คุณเอ โทร. <strong className="text-neutral">088-909-3896</strong> ID LINE: <strong
                className="text-neutral">teeruka</strong>
            </p>
          </section>
          <br />
          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              รางน้ำคอนกรีตสำเร็จรูป
            </h2>
            <p className="text-lg">
              รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของ SNR มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย
              รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
            </p>
          </section>
          <img src="/images/home/banner1.jpg" alt="รางน้ำคอนกรีตสำเร็จรูป"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />

          <section>
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
          </section>
          <img src="/images/home/banner2.png" alt="ผนังสำเร็จรูป ระบบ Knockdown"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              แสลทปูพื้นคอนกรีตสำเร็จรูป
            </h2>
            <p className="text-lg">
              แสลทปูพื้นสำเร็จรูป SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
              โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
              และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด ยังมีแสลทปูพื้น มีให้เลือก หลายแบบ
              หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
          </section>
          <img src="/images/home/banner3.png" alt="แสลทปูพื้นคอนกรีตสำเร็จรูป"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              ระบบ เสา คาน ตอม่อ สำเร็จรูป
            </h2>
            <p className="text-lg">
              ตอม่อ สำเร็จรูป ระบบ Knockdownผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก
              ด้วยการออกแบบในระบบ Knockdown ทำ ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา
              ใช้แรงงานในการก่อสร้างน้อย ไม่สิ้นเปลืองวัสดุอื่น (เช่น ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว
              ประหยัดงบประมาณในการก่อสร้าง
            </p>
          </section>
          <img src="/images/home/banner4.png" alt="ระบบ เสา คาน ตอม่อ สำเร็จรูป"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              สแลทพ่อพันธุ์
            </h2>
            <p className="text-lg">
              แสลทปูพื้นสำเร็จรูป ของ SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
              โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
              และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ
              หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              สแลทคอกคลอด
            </h2>
            <p className="text-lg">
              แสลทปูพื้นสำเร็จรูป ของ บริษัทสยามน้ำรินจำกัด ผลิตจากคอนกรีตเสริม เหล็กซึ่งมีความคงทนแข็งแกร่ง
              โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
              และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ
              หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              ผนังคอกหมูขุน
            </h2>
            <p className="text-lg">
              ระบบ Knockdown ผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก ด้วยการออกแบบในระบบ
              Knockdown ทำ ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา ใช้แรงงานในการก่อสร้างน้อย
              ไม่สิ้นเปลืองวัสดุอื่น (เช่น ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว ประหยัดงบประมาณในการก่อสร้าง
            </p>
          </section>
          <img src="/images/home/banner5.png" alt="สแลทพ่อพันธุ์ สแลทคอกคลอด ผนังคอกหมูขุน"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              รั้วและกำแพงคอนกรีตสำเร็จรูป
            </h2>
            <p className="text-lg">
              ระบบรั้วและกำแพงกันดิน สำเร็จรูป ขนาดได้มาตรฐาน ตามหลักวิศวกรรม รั้วและกำแพงกันดินของ SNR
              มีความแข็งแรงเพราะผลิตด้วยกรรมวิธีคอนกรีตอัดแรง ลูกค้าสามารถเชื่อมั่นและวางใจในผลิตภัณฑ์ทั้งคุณภาพ
              และ ราคาจากโรงงาน
            </p>
          </section>
          <img src="/images/home/banner6.jpg" alt="รั้วและกำแพงคอนกรีตสำเร็จรูป"
            className="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
          <br />
        </div>

        {/* Scroll to Top */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default ContentHome;