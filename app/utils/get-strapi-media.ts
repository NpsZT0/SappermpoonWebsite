// import { getStrapiURL } from "utils/get-strapi-url";

export function getStrapiMedia(url: string|null, notForNextImage: boolean=false): string {
    // console.log("getStrapiMedia URL:", url); // Debugging log to check the URL
    if (url == null) return "";
    if (url.startsWith("data:")) return url; // Handle base64 data URLs
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) return url; // Already absolute URL
    if (url.endsWith('.svg') || notForNextImage) return "http://127.0.0.1:1337" + url; // Return SVG as is
    return "http://spp_server:1337" + url; // Convert to absolute URL
    // Uncomment for Production
    // return process.env.NEXT_PUBLIC_STRAPI_API_URL + url; // Convert to absolute URL
}