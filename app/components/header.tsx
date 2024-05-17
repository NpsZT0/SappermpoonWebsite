// 'use client';

// import Link from "next/link";
// import SwapThemeMode from "./swap-theme-mode";

// function Header() {
//     return (
//         <div className="navbar bg-base-200 text-base-content sticky top-0 z-[1]">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-fit">
//                         {/* <li><Link href={'/'}>หน้าแรก</Link></li> */}
//                         <li>
//                             <div>สินค้าและบริการ</div>
//                             <ul className="p-2">
//                                 <li><Link href="/product-service/trough">รางระบายน้ำ</Link></li>
//                                 {/* <li><Link href="/product-service/slate-floor">แผ่นสแลทปูพื้นคอกสำเร็จรูป</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-breeder">สแลทพ่อพันธุ์</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-calve">สแลทคอกคลอด</Link></li> */}
//                                 {/* <li><Link href="/product-service/wall-calve">ผนังคอกคลอด</Link></li> */}
//                                 {/* <li><Link href="/product-service/wall-pig">ผนังคอกหมูขุน</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-knockdown">ผนังสำเร็จรูป ระบบ Knockdown สำหรับกั้นคอก</Link></li> */}
//                                 {/* <li><Link href="/product-service/pillar-beams-pier">ระบบ เสา คาน ตอม่อ สำเร็จรูป</Link></li> */}
//                                 <li><Link href="/product-service/trough-cover">ฝารางระบายน้ำ</Link></li>
//                                 <li><Link href="/product-service/steel-grating-cover">ฝาตะแกรงเหล็ก</Link></li>
//                                 <li><Link href="/product-service/stake">เสาเข็ม แผ่นพื้น เสาไอ</Link></li>
//                                 {/* <li><Link href="/product-service/fence">รั้วและกำแพงกันดิน คอนกรีตสำเร็จรูป</Link></li> */}
//                             </ul>
//                         </li>
//                         <li><Link href="#">ออกแบบและก่อสร้าง</Link></li>
//                         <li><Link href="#">ผลการดำเนินงาน</Link></li>
//                         <li><Link href="#">เกี่ยวกับเรา</Link></li>
//                         <li><Link href="#">ติดต่อ</Link></li>
//                     </ul>
//                 </div>
//                 {/* <div className='w-[100px] h-fit hidden md:block'>
//                     <Image
//                         src="/logo/logo-bg.svg"
//                         width={100}
//                         height={100}
//                         alt="SPP"
//                         className="ml-4 object-cover "
//                     />
//                 </div> */}
//                 <Link className={`btn btn-sm md:btn-md text-sm md:text-base glass ml-1`} href="/">ทรัพย์เพิ่มพูน</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 space-x-1">
//                     {/* <li><Link href="/">หน้าแรก</Link></li> */}
//                     <li>
//                         <details>
//                             <summary>
//                                 สินค้าและบริการ
//                             </summary>
//                             <ul className="p-2 bg-base-200 space-y-1 rounded-t-none z-[1]">
//                                 <li><Link href="/product-service/trough">รางระบายน้ำ</Link></li>
//                                 {/* <li><Link href="/product-service/slate-floor">แผ่นสแลทปูพื้นคอกสำเร็จรูป</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-breeder">สแลทพ่อพันธุ์</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-calve">สแลทคอกคลอด</Link></li> */}
//                                 {/* <li><Link href="/product-service/wall-calve">ผนังคอกคลอด</Link></li> */}
//                                 {/* <li><Link href="/product-service/wall-pig">ผนังคอกหมูขุน</Link></li> */}
//                                 {/* <li><Link href="/product-service/slate-knockdown">ผนังสำเร็จรูป ระบบ Knockdown สำหรับกั้นคอก</Link></li> */}
//                                 {/* <li><Link href="/product-service/pillar-beams-pier">ระบบ เสา คาน ตอม่อ สำเร็จรูป</Link></li> */}
//                                 <li><Link href="/product-service/trough-cover">ฝารางระบายน้ำ</Link></li>
//                                 <li><Link href="/product-service/steel-grating-cover">ฝาตะแกรงเหล็ก</Link></li>
//                                 <li><Link href="/product-service/stake">เสาเข็ม แผ่นพื้น เสาไอ</Link></li>
//                                 {/* <li><Link href="/product-service/fence">รั้วและกำแพงกันดิน คอนกรีตสำเร็จรูป</Link></li> */}
//                             </ul>
//                         </details>
//                     </li>
//                     <li><Link href="/product-service/trough-cover">ออกแบบและก่อสร้าง</Link></li>
//                     <li><Link href="/2">ผลการดำเนินงาน</Link></li>
//                     <li><Link href="/3">เกี่ยวกับเรา</Link></li>
//                     <li><Link href="/4">ติดต่อ</Link></li>
//                 </ul>
//             </div>
//             <div className="navbar-end mr-4">
//                 <SwapThemeMode />
//                 {/* <Link className="btn">ติดต่อ</Link> */}
//             </div>
//         </div>
//     );
// }

// export default Header;


'use client';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import SwapThemeMode from "./swap-theme-mode";

function Header({ routerData }: { routerData: { name: string, href: string }[] }) {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <header id="navbar-top" className="sticky top-0 z-[1] h-[--header-height] -mb-px backdrop-blur border-b border-gray-200 lg:border-0 lg:mb-0 navbar ">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">
                <Link href={`/`}>
                    <img src="/favicon/circle/spp-black.ico" alt="logo" className="w-[5rem] h-[3rem]" />
                </Link>
            </div>
            <div className="flex-none hidden lg:block z-[1]">
                {/* Navbar menu content here */}
                <ul className="menu menu-horizontal">
                    {routerData.map((item, index) => (
                        <li key={index} className="px-1">
                            {(pathname === item.href) ? (
                                <Link href={item.href} className="text-base text-primary">
                                    {item.name}
                                </Link>
                            ) : (
                                <Link href={item.href} className="text-base text-black">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div >
        </header >
    );
}

export default Header;