import Link from "next/link";
import { companyData } from "../static/json";

function Footer() {
    return (
        <footer className="footer p-10 bg-black text-white">
            <nav className="space-y-4 h-full">
                <header className="font-bold text-2xl">Sappermpoon</header>
                <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/profile.php?id=61552705402870" target="_blank" className="link link-hover">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <Link href="" className="link link-hover">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg>
                    </Link>
                    <Link href="" className="link link-hover">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                        </svg>

                    </Link>
                    <Link href="" className="link link-hover">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                    </Link>
                </div>
                <nav>
                    <div className="p-2 bg-white rounded-lg ">
                        <img src="/images/line_qrcode.jpg" alt="Line QR-code" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem]" />
                    </div>
                </nav>
            </nav>
            <nav>
                <header className="footer-title">Contact</header>
                <Link href="/" className="link link-hover">{companyData.name_th}</Link>
                <div>
                    Tel.&nbsp;<Link href={`tel:{companyData.tel}`} className="link link-hover">{companyData.tel}</Link>
                </div>
                <div>
                    Email: <Link href={`mailto:${companyData.email}`} className="link link-hover">{companyData.email}</Link>
                </div>
            </nav>
            <nav>
                <header className="footer-title">Services</header>
                <Link href="" className="link link-hover">Branding</Link>
                <Link href="" className="link link-hover">Design</Link>
                <Link href="" className="link link-hover">Marketing</Link>
                <Link href="" className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link href="" className="link link-hover">About us</Link>
                <Link href="" className="link link-hover">Contact</Link>
                <Link href="" className="link link-hover">Jobs</Link>
                <Link href="" className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link href="" className="link link-hover">Terms of use</Link>
                <Link href="" className="link link-hover">Privacy policy</Link>
                <Link href="" className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
}

export default Footer;