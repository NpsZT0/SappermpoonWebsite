'use client';
import Link from "next/link";
import StrapiImage from "@components/StrapiImage";
import { usePathname } from "next/navigation";
import { LinkProps, LogoProps } from "types";

interface HeaderProps {
    data: {
        logo: LogoProps;
        navigation: LinkProps[];
        cta?: LinkProps;
    }
}

export default function Header({ data }: Readonly<HeaderProps>) {
    const pathname = usePathname()

    if (!data) return null; // Return null if no data is provided

    const { logo, navigation, cta } = data;

    return (
        <header id="header" className="sticky top-0 z-[1] h-[--header-height] -mb-px backdrop-blur border-b border-gray-200 lg:border-0 lg:mb-0 navbar ">
            <nav id="navbar" className="container lg:mx-auto navbar ">
                {/* 3Lines Sidebar Icon */}
                <div id="sidebar-icon" className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </label>
                </div>
                {/* Logo and Navigation */}
                <div id="navbar-logo" className="flex-1 px-2 mx-2">
                    <Link href={`/`} className="mr-3">
                        <StrapiImage
                            src={logo.image.url}
                            alt={logo.image.alternativeText || "No alternative text provided"}
                            className={"w-[5rem] h-[5rem]"}
                            width={80}
                            height={48}
                        />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-800">ทรัพย์เพิ่มพูน คอนกรีต</h1>
                </div>
                {/* Desktop Navbar menu content */}
                <div className="flex-none hidden lg:block z-[1]">
                    <ul className="menu menu-horizontal">
                        {navigation.map((item, index) => {
                            return (
                                <li key={index} className="px-1">
                                    {(pathname === item.href) ? (
                                        <Link href={item.href} target={cta?.isExternal ? "_blank" : "_self"} className={`text-base font-semibold text-primary`}>
                                            {item.text}
                                        </Link>
                                    ) : (
                                        <Link href={item.href} target={cta?.isExternal ? "_blank" : "_self"} className={`text-base font-semibold text-gray-600`}>
                                            {item.text}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                        {cta &&
                            <li key={navigation.length} className="px-1">
                                <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"} className={`bg-primary text-base font-semibold text-white`}>
                                    {cta.text}
                                </Link>
                            </li>
                        }
                    </ul>
                </div >
                {/* <SwapThemeMode /> */}
            </nav>
        </header>
    )
}
