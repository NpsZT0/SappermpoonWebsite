import Image from "next/image";
import { getStrapiMedia } from "utils/get-strapi-media";

interface StrapiImageProps {
    src: string;
    alt: string;
    className?: string;
    [key: string]: any; // Allow additional props
}

export default function StrapiImage({
    src,
    alt,
    className,
    ...rest
}: Readonly<StrapiImageProps>) {
    const imageUrl = getStrapiMedia(src);
    if (imageUrl == "") return null; // Return null if no valid URL is provided
    console.log("StrapiImage URL:", imageUrl); // Debugging log to check the URL
    return (
        <Image
            src={imageUrl}
            alt={alt}
            className={className}
            {...rest}
        />
    );
}

