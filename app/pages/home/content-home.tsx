import CarouselHome from "../../components/carousel";
import ScrollToTopButton from "../../components/scroll-to-top";
import Heading1 from "./partials/heading1";
import Heading2 from "./partials/heading2";
import Heading3 from "./partials/heading3";
import Heading4 from "./partials/heading4";
import Heading5 from "./partials/heading5";
import Heading6 from "./partials/heading6";
import Heading7 from "./partials/heading7";
import Title from "./partials/title";

function ContentHome() {
  return (
    <div className='flex items-center justify-center py-10 px-5 md:px-0'>
      <div className="mx-auto">
        <div className="w-auto h-auto p-8">
          <Title />
          <br />

          <Heading1 />
          <br />

          <Heading2 />
          <br />

          <Heading3 />
          <br />

          <Heading4 />
          <br />

          <Heading5 />
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              สแลทพ่อพันธุ์
            </h2>
            <p className="text-lg">
              แสลทปูพื้นสำเร็จรูป ของ SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
              โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
              และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทห้างหุ้นส่วนจำกัด ทรัพย์เพิ่มพูน คอนกรีต มีแสลทปูพื้น มีให้เลือก หลายแบบ
              หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
          </section>
          <br />

          <section>
            <h2 className="text-2xl font-semibold text-secondary">
              สแลทคอกคลอด
            </h2>
            <p className="text-lg">
              แสลทปูพื้นสำเร็จรูป ของ บริษัทห้างหุ้นส่วนจำกัด ทรัพย์เพิ่มพูน คอนกรีต ผลิตจากคอนกรีตเสริม เหล็กซึ่งมีความคงทนแข็งแกร่ง
              โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
              และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทห้างหุ้นส่วนจำกัด ทรัพย์เพิ่มพูน คอนกรีต มีแสลทปูพื้น มีให้เลือก หลายแบบ
              หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
          </section>
          <br />

          <Heading6 />
          <br />

          <Heading7 />
          <br />
        </div>

        {/* Scroll to Top */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default ContentHome;