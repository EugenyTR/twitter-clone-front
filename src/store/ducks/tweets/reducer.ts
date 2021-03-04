import produce, {Draft} from 'immer';
import {LoadingState, TweetsState} from "./contracts/state";
import {TweetsAction, TweetsActionsType} from "./actionCreators";

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsAction) => {
    const {type, payload} = action;

    if (type === TweetsActionsType.SET_TWEETS) {
        draft.items = payload;
    }

}, initialTweetsState);