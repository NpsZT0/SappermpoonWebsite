'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import { LinkProps, LogoProps } from "types";

interface SidebarProps {
    data: {
        logo: LogoProps;
        navigation: LinkProps[];
        cta?: LinkProps;
    }
}

function Sidebar({ data }: Readonly<SidebarProps>) {
    const pathname = usePathname()

    if (!data) return null; // Return null if no data is provided

    const { navigation, cta } = data;

    return (
        <div className="z-[1] drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="min-h-full p-4 menu w-80 bg-neutral/80 backdrop-blur">
                {/* Sidebar content here */}
                {navigation.map((item, index) => (
                    <li key={index}>
                        {(pathname === item.href) ? (
                            <Link href={item.href} target={cta?.isExternal ? "_blank" : "_self"} className="text-sm leading-6 text-primary">
                                {item.text}
                            </Link>
                        ) : (
                            <Link href={item.href} target={cta?.isExternal ? "_blank" : "_self"} className="text-sm leading-6 text-primary-content">
                                {item.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul >
        </div >
    );
}

export default Sidebar;