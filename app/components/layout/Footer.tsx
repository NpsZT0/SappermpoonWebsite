import StrapiImage from "@components/StrapiImage";
import Link from "next/link";
import { ImageLinkProps, ImageProps, LinksGroupProps } from "types";

interface FooterProps {
    data: {
        title: string;
        linksGroup: LinksGroupProps[];
        imageLink: ImageLinkProps[];
        image: ImageProps;
    }
}

export default function Footer({ data }: Readonly<FooterProps>) {
    const { title, linksGroup, imageLink, image } = data;

    return (
        <footer className="footer p-10 bg-black text-white">
            <nav className="space-y-4 h-full">
                <header className="font-bold text-2xl whitespace-normal">{title}</header>
                <div className="flex space-x-4">
                    {imageLink.map((item, index) => (
                        <Link key={index} href={item.href} target={`${item.isExternal ? "_blank" : "_self"}`} className="link link-hover">
                            <StrapiImage
                                src={item.image.url}
                                alt={item.image.alternativeText || "No alternative text provided"}
                                className={"w-6 h-6 invert-[62] saturate-200 brightness-200 contrast-200"}
                                width={80}
                                height={48}
                            />
                        </Link>
                    ))}
                </div>
                <nav>
                    <div className="p-2 bg-white rounded-lg ">
                        <img src="/images/line_qrcode.jpg" alt="Line QR-code" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem]" />
                    </div>
                </nav>
            </nav>
            {/* <nav>
                <header className="footer-title">Contact</header>
                <Link href="/" className="link link-hover">{companyData.name_th}</Link>
                <div>
                    Tel.&nbsp;<Link href={`tel:${companyData.tel}`} className="link link-hover">{companyData.tel}</Link>
                </div>
                <div>
                    Email: <Link href={`mailto:${companyData.email}`} className="link link-hover">{companyData.email}</Link>
                </div>
            </nav> */}
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
    )
}
