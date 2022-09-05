import axios from "axios";

export const api = axios.create({
    baseURL: process.env.VUE_APP_API_END_POINT,
    headers: {
        "Content-type": "application/json",
        // "Authorization" :`Bearer ${ process.env.VUE_APP_TOKEN }`
    },
    timeout: 30000,
});




