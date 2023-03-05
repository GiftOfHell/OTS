import * as process from "process";
import axios from "axios";

const SERVER_URI = process.env.NEXT_PUBLIC_API_HOST as string;

class Api {
    baseUrl: string = SERVER_URI;
    axiosInstance = axios.create({
        baseURL: this.baseUrl,
        withCredentials: true,
    })

    static instance() {
        return apiInstance
    }

    async signup(username: string, password: string) {
        await this.axiosInstance.post('/user/signup', {username, password});
    }

    async login(username: string, password: string) {
        await this.axiosInstance.post('/user/login', {username, password});
    }

    async getQuizzes() {
        const {data} = await this.axiosInstance.get('/quiz')
        return data;
    }
}

const apiInstance = new Api();

export default apiInstance;