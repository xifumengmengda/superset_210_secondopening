export const THEN_SWICH = 'THEN_SWICH';
// call this one when it's not an undo-able action
export function updateDashboardType(type) {
    //   return {
    //     type: THEN_SWICH,
    //     payload: {
    //         type,
    //     },
    //   };
    return dispatch => {
        dispatch({
            type: THEN_SWICH, 
            payload: {
                type,
            },
        });
    };
}