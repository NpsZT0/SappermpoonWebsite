'use client';
import {
    tableOfContents,
} from '@/app/static/json'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation'

function TableOfContent() {
    const pathname = usePathname()
    const [isClicked, setIsClicked] = useState(false)
    return (
        <aside
            className="lg:col-span-3 order-first lg:order-last sticky top-[--header-height] backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-[1] lg:z-[0]">
            <nav>
                <div className="border-b border-gray-200 border-dashed lg:py-8 lg:border-0">
                    <button type="button" className="py-3 flex items-center gap-1.5 lg:cursor-text lg:select-text w-full h-full lg:disabled"
                        onClick={() => {
                            console.log('clicked')
                            setIsClicked(!isClicked)
                        }}>
                        <span className="font-semibold truncate text-sm/6">Table of Contents</span>
                        <span
                            className={`${isClicked ? 'lg:!hidden ms-auto transform transition-transform duration-200 rotate-180 flex items-center justify-center flex-shrink-0 mr-1.5 w-4 h-4 text-gray-900'
                                : 'lg:!hidden ms-auto transform transition-transform duration-200 flex items-center justify-center flex-shrink-0 mr-1.5 w-4 h-4 text-gray-900'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <ul className={`${isClicked ? 'space-y-1 lg:block' : 'hidden space-y-1 lg:block'}`}>
                        {tableOfContents.map((content, index) => (
                            <li key={index} className={`${isClicked ? 'space-y-1 lg:block' : 'hidden space-y-1 lg:block'}`}>
                                <Link href={content.href} id={`link-${index + 1}`}
                                    className={`link-items ${pathname === content.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'}`}>
                                    {content.name}
                                </Link>
                                <ul className="space-y-1">
                                    {content.children && content.children.map((child: any, index: any) => (
                                        <li key={index} className="ml-3 space-y-1">
                                            <Link href={child.href} id={`link-${index + 1}`}
                                                className={`link-items ${pathname === child.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'}`}>
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav >
        </aside >
    );
}

export default TableOfContent;