const getImage = (trough: {
    attributes: {
        name: string;
        type: string;
        image: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string;
                        };
                        small: {
                            url: string;
                        };
                        large: {
                            url: string;
                        };
                        medium: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}, size: string = 'small') => {
    switch (size) {
        case 'thumbnail':
            return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.thumbnail.url}`
        case 'small':
            return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.small.url}`
        case 'large':
            return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.large.url}`
        case 'medium':
            return `${process.env.STRAPI_URL}${trough.attributes.image.data.attributes.formats.medium.url}`
    }
}

export default getImage