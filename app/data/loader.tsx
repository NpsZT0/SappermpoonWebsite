import qs from "qs";
import { fetchAPI } from "utils/fetch-api";
import { getStrapiURL } from "utils/get-strapi-url";

const BLOG_PAGE_SIZE = 3;
const BASE_URL = getStrapiURL();

const globalSettingQuery = qs.stringify({
    populate: {
        header: {
            populate: {
                logo: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                navigation: true,
                cta: true,
            },
        },
        footer: {
            populate: {
                linksGroup: {
                    populate: {
                        link: true
                    }
                },
                imageLink: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                image: {
                    fields: ["url", "alternativeText"],
                }
            }
        }
    },
});
const homePageQuery = qs.stringify(
    {
        populate: {
            blocks: {
                on: {
                    "blocks.hero-section": {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                            cta: true,
                            link: true,
                        },
                    },
                    // "blocks.info-block": {
                    //     populate: {
                    //         image: {
                    //             fields: ["url", "alternativeText"],
                    //         },
                    //         cta: true,
                    //     },
                    // },
                },
            },
        },
    }
)


export async function getGlobalSettings() {
    const path = "/api/global";
    const url = new URL(path, BASE_URL);
    // console.log("getGlobalSettings URL: ", url.href);
    url.search = globalSettingQuery;
    const result = await fetchAPI(url.href, { method: "GET" });
    return result;
}

export async function getHomePage() {
    const path = "/api/home-page";
    const url = new URL(path, BASE_URL);
    // console.log("getHomePage URL: ", url.href);
    url.search = homePageQuery;
    const result = await fetchAPI(url.href, { method: "GET" });
    return result;
}

