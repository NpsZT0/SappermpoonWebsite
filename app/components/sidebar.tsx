'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";

function Sidebar({ routerData }: { routerData: { name: string, href: string }[] }) {
    const pathname = usePathname()
    return (
        <div className="z-[1] drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="min-h-full p-4 menu w-80 bg-neutral/80 backdrop-blur">
                {/* Sidebar content here */}
                {routerData.map((item, index) => (
                    <li key={index}>
                        {(pathname === item.href) ? (
                            <Link href={item.href}
                                className="text-sm leading-6 text-primary">
                                {item.name}
                            </Link>
                        ) : (
                            <Link href={item.href}
                                className="text-sm leading-6 text-primary-content">
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul >
        </div >
    );
}

export default Sidebar;