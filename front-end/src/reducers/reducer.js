import { LOGIN, LOGOUT, ADD_SCORE, ADD_LEVEL, SUBMIT_ANSWER } from './../actions/actionCreator';

export const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    level: 0,
    score: 0

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload);
            return {

            }
        case LOGOUT:
            return {

            }
        case ADD_SCORE:
            console.log(action.payload);
            return {

            }
        case ADD_LEVEL:
            console.log(action.payload);
            return {

            }
        case SUBMIT_ANSWER:
            console.log(action.payload);
            return {

            }
        default:
            return state;
    }
};