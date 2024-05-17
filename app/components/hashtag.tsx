function Hashtag({ name, href }: { name: string, href: string }) {
    return (
        <a className="relative border-none group lg:-ml-2 lg:pl-2" href={href}>
            <span
                className="absolute items-center hidden -ml-8 border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">{'\u200B'}
                <span
                    className="flex items-center justify-center w-6 h-6 rounded-md shadow-sm text-slate-400 ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10">
                    <svg width="12" height="12" fill="none" aria-hidden="true">
                        <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round">
                        </path>
                    </svg>
                </span>
            </span>{name}
        </a>
    );
}

export default Hashtag;