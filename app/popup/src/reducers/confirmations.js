import { store, popup } from "../index";

/**********************************
 *********** ACTIONS **************
 **********************************/

export const SET_CONFIRMATIONS = 'SET_CONFIRMATIONS';
export const ADD_CONFIRMATION = 'ADD_CONFIRMATION';

export const setConfirmations = confirmations => ({
    type: SET_CONFIRMATIONS,
    confirmations
});

export const addConfirmation = confirmation => ({
    type: ADD_CONFIRMATION,
    confirmation
});

/**********************************
 *********** UPDATES **************
 **********************************/

export const updateConfirmations = async () => {
    const confirmations = await popup.getConfirmations();

    store.dispatch(
        setConfirmations(confirmations)
    );
};

/**********************************
 *********** REDUCER **************
 **********************************/
const initialState = {
    confirmations: []
};

export function confirmationsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CONFIRMATIONS:
            return {
                ...state,
                confirmations: action.confirmations
            };
        case ADD_CONFIRMATION:
            return {
                ...state,
                confirmations: [
                    action.confirmation, 
                    ...state.confirmations
                ]
            };
        default:
            return state;
    }
}


