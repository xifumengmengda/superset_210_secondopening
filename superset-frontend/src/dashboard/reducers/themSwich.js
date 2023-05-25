import {
    THEN_SWICH,
} from '../actions/timeSwich';

export default function themSwichStateReducer(state = {}, action) {
    switch (action.type) {
        
        case THEN_SWICH:
            console.log("reducer里面的",action);
            return {
                ...state,
                ...action.payload,
                // server-side compare last_modified_time in second level
            };
        default:
            return state;
    }
}
