import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingState} from "./contracts/state";
import {setTweetData, setTweetLoadingState} from "./actionCreators";
import {FetchTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {Tweet} from "../tweets/contracts/state";

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]));
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    } 
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}