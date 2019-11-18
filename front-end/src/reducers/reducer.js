import { ADD_FEAT, REMOVE_FEAT } from './../actions/actionCreators';

export const initialState = {

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEAT:
            console.log(action.payload);
            return {

            }
        case REMOVE_FEAT:
            return {

            }
        default:
            return state;
    }
};