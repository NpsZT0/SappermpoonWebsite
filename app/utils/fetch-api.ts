import axios, { AxiosRequestConfig, Method } from "axios";

type NextFetchRequestConfig = {
    revalidate?: number | false;
    tags?: string[];
};

interface FetchAPIOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    authToken?: string;
    body?: Record<string, unknown>;
    next?: NextFetchRequestConfig; // ไม่ใช้งานใน axios แต่คงไว้เพื่อ interface เดิม
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
    const { method, authToken, body } = options;

    const config: AxiosRequestConfig = {
        method: method as Method,
        url,
        headers: {
            "Content-Type": "application/json",
            ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        ...(body && { data: body }), // ใช้ data แทน body สำหรับ axios
    };

    try {
        const response = await axios(config);
        console.log(`Response from: ${method} ${url}:`);
        console.dir(response.data, { depth: null });
        return response.data;
    } catch (error: any) {
        console.error(`Error ${method} data {${url}}:`, error.response?.data || error.message);
        throw error;
    }
}
