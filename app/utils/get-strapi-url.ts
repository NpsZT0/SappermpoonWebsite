export function getStrapiURL() {
    // console.log(`getStrapiURL called ${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);
    return process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
}
