import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Thai, Poppins } from 'next/font/google'
import { Header, Sidebar, Footer } from '@components/layout';
import { companyData, routerData } from "./static/json";
// import PrelineScript from "./components/PrelineScript";
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { companyData } from "./functions";

import { getGlobalSettings } from 'data/loader';


const notoSans = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  variable: '--font-noto',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  // viewport: 'width=device-width, initial-scale=1.0',
  title: companyData.name_th,
  openGraph: {
    title: companyData.name_th,
    description: `สินค้า คอนกรีต สำเร็จรูป รวมถึงงานออกแบบ และงานก่อสร้าง ${companyData.name_th} มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน หรือโรงงาน โปรดรับ ${companyData.name_th} เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ พร้อมให้คำแนะนำ เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน`,
    url: 'https://nextjs.org',
    siteName: companyData.name_en,
    images: [
      {
        url: 'https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}

async function loader() {
  const { data } = await getGlobalSettings();
  // console.dir(data, { depth: null });
  if (!data) throw new Error("Failed to fetch global settings");
  return { header: data?.header, footer: data?.footer };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { header, footer } = await loader();
  // console.log("Header: ");
  // console.dir(header, { depth: null });
  // console.log("Footer: ");
  // console.dir(footer, { depth: null });

  return (
    <html lang="en" data-theme="default" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon/circle/spp-black.ico" type="image/x-icon" sizes="any" />
      </head>
      <body id="home">
        <div className={`container ${notoSans.className}`}>
          <div className="absolute inset-x-0 top-0 z-[1] w-full h-full">
            <div className="drawer">
              <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
              <div className="flex flex-col drawer-content bg-white">
                <Header data={header} />
                {children}
                <Footer data={footer} />
              </div>
              <Sidebar data={header} />
            </div>
          </div>
        </div>
        {/* <SpeedInsights />
        <PrelineScript /> */}
      </body>
    </html>
  )
}
