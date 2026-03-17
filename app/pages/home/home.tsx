import { companyData } from "@static/json";
import { Carousel, ScrollToTopButton } from "../../components";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Heading7, Title } from "./partials";


function Home() {

  // const carouselLinks = [
  //   {
  //     src: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194096.jpg&fm=jpg&_gl=1*6m6e8s*_ga*MTY1MDI0NTU2My4xNzEyODExNTcy*_ga_8JE65Q40S6*MTcxMjgxMTU3MS4xLjEuMTcxMjgxMTU3NS4wLjAuMA..",
  //     alt: "",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/2431402/pexels-photo-2431402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "",
  //   }
  // ]
  return (
    <>
      {/* <Carousel links={carouselLinks} /> */}
      <div className='flex items-center justify-center'>
        <div className="mx-auto">
          <div className="w-auto h-auto p-[40px] lg:p-[80px] space-y-[4rem]">
            <Title />

            {/* <Heading1 /> */}

            <Heading2 />

            <Heading3 />

            <Heading4 />

            <Heading5 />

            <section>
              <h2 className="text-2xl font-semibold text-secondary">
                สแลทพ่อพันธุ์
              </h2>
              <p className="text-lg">
                แสลทปูพื้นสำเร็จรูป ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย {companyData.name_th} มีแสลทปูพื้น มีให้เลือก หลายแบบ
                หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary">
                สแลทคอกคลอด
              </h2>
              <p className="text-lg">
                แสลทปูพื้นสำเร็จรูป ของ {companyData.name_th} ผลิตจากคอนกรีตเสริม เหล็กซึ่งมีความคงทนแข็งแกร่ง
                โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย {companyData.name_th} มีแสลทปูพื้น มีให้เลือก หลายแบบ
                หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
              </p>
            </section>

            <Heading6 />

            <Heading7 />
          </div>

          {/* Scroll to Top */}
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}

export default Home;