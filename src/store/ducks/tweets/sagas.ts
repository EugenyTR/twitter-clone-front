import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from "../../../services/api/tweetsApi";
import {
    addTweet,
    FetchAddTweetActionInterface,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {LoadingState} from "./contracts/state";

export function* fetchTweetsRequest() {
    try {
        // @ts-ignore
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    } 
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
    try {
        // @ts-ignore
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: "Test User",
                username: "test",
                avatarUrl: "https://scontent.fuln9-1.fna.fbcdn.net/v/t1.0-9/49895753_105237560570056_6095035690876141568_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeEQnm9B373rBeq56jGk_0oPlnn4PILQMIWWefg8gtAwhQRstMLvK1fo6296xDZ85IzBjpNBOwW3IXFMcWAlwEit&_nc_ohc=0KvVyluliKQAX9KTlF4&_nc_ht=scontent.fuln9-1.fna&oh=e41b47fd3b0c1e3bdcf03352f9ed12ef&oe=60672C84"
            },
        };
        // @ts-ignore
        const item = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(item));
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}