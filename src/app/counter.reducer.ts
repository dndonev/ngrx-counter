import { Action, ActionReducerMap } from '@ngrx/store';

export function reducer(state: number = 0, action: Action) {
    switch (action.type) {

        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return 0;

        default:
            return state;
    }
}

export const counterReducer: ActionReducerMap<any> = {
    counter: reducer
};
