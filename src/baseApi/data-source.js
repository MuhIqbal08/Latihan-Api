import axios from "axios";
import baseApi from "./api";


const topComic = async() => {
    const options = {
            method: 'GET',
            url: `${baseApi}/top/manga?&filter=bypopularity`,
            headers: {
                accept: 'application/json',
            }
        };

        try {
            const response = await axios.request(options);
            const results = response.data.data;
            return results;
            console.log(results);
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching top comics:', error);
        }
}

const comicDetail = async() => {
    const options = {
            method: 'GET',
            url: `${baseApi}/manga/2/full`,
            headers: {
                accept: 'application/json',
            }
        };

    try {
        const response = await axios.request(options);
            const results = response.data.data;
            return results;
            console.log(results);
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching detail comics:', error);
        }
}

export { topComic, comicDetail }