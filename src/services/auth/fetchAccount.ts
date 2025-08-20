import axios from "../axios.customize";

export const fetchAccountAPI = () => {
    const urlBackend = `/api/v1/account`
    return axios.get<IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 3000
        }
    })
}