import { getAuth } from "firebase/auth";
import { Api } from "./api-client";

export const apiInstance = new Api({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: false, // turn off credentials to allow ACAO: *
    headers: { "Content-Type": "application/json" }
});

apiInstance.instance.interceptors.request.use(async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        const token = await user.getIdToken();
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const useApiInstance = () => {
    return apiInstance;
}