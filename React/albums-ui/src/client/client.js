import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL; 

const fetchGetData = (url) => {
    return axios.get(url)
        .catch(error => {
            console.log("Error fetching data from URL: ", url, " Error message: ", error.message);
            throw error;
        });
};

const fetchPostData = (uri, payload) => {
    const url = `${BASE_URL}${uri}`;
    return axios.post(url, payload)
    .catch(error => {
        console.log("Error fetching data from URL: ", url, " Error message: ", error.message);
        throw error;
    })
}

export default fetchGetData;
export {fetchPostData};