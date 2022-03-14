import axios from 'axios';

const KEY = "AIzaSyAzgv-R1WK5aEcZw6n-DfvgAEkVczK0en4";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        type: 'video',
        maxResults: 5 ,
        key: KEY

    }
})
