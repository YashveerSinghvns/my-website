import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID dEH1SA4eWwQx7pY1Cyiz9smDoCPqajGZzQ5OlECRuUU'
    }

})