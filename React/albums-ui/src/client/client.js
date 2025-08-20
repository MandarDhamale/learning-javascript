import axios from 'axios';

const fetchGetData = (url) => {
    return axios.get(url)
        .catch(error => {
            console.log("Error fetching data from URL: ", url, " Error message: ", error.message);
            throw error;
        });
};

export default fetchGetData;