import axios from 'axios';
import {TweetsState} from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        // return axios.get('https://trycode.pw/c/EUVQ9.json').then(({ data }) => data);
        return axios.get('/tweets').then(({ data }) => data);
    }
};