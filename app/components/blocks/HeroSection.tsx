import Link from "next/link";
import type { HeroSectionProps } from "types";
import StrapiImage from "@components/StrapiImage";
import { getStrapiMedia } from "utils/get-strapi-media";

export function HeroSection({
    // theme,
    image,
    heading,
    headline,
    cta,
    link,
    // logo,
    // author,
    // publishedAt,
    // darken = false,
}: Readonly<HeroSectionProps>) {
    const imageUrl = getStrapiMedia(image.url, true); // Pass true to notForNextImage to handle SVGs correctly
    if (imageUrl == "") return null; // Return null if no valid URL is provided
    console.log("HeroSection Image URL:", imageUrl); // Debugging log to check the URL
    return (
        <section
            className={`hero text-white py-20 md:py-32 bg-cover bg-center`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 fade-in">{heading}</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in">{headline}</p>
                {(cta || link) && (
                    <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
                        {cta && (
                            // <button className={`btn btn--medium btn--${theme}`}>
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
                                    {cta.text}
                                </Link>
                            </button>
                        )}
                        {link && (
                            // <button className={`btn btn--medium btn--${theme}`}>
                            <button className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                    {link.text}
                                </Link>
                            </button>
                        )}
                    </div>
                )}

            </div>

        </section>
    );
}

// <div className="hero__background">
//     <StrapiImage
//         src={image.url}
//         alt={image.alternativeText || "No alternative text provided"}
//         className="hero__background-image"
//         width={1920}
//         height={1080}
//     />
//     {/* {darken && <div className="hero__background__overlay"></div>} */}
// </div>
// {/* <div className={`hero__heading hero__heading--${theme}`}>
//     <h1>{heading}</h1>
//     {author && <p className="hero__author">{author}</p>}
//     {publishedAt && <p className="hero__published-at">{publishedAt}</p>}
// </div> */}
// {cta && (
//     // <button className={`btn btn--medium btn--${theme}`}>
//     <button className={``}>
//         <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
//             {cta.text}
//         </Link>
//     </button>
// )}