import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const API_KEY = '?key=PAPERCLIP1234'

const ROOT_URL = 'http://reduxlog.hrokuapp.com/api';

const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);


export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: request
    }
}