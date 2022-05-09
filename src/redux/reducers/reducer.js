// import * as actions from "./actionTypes";
//
// export const initialState = {
//     userContext: null,
// };
//
// export default function reducer(state = initialState, action) {
//     switch(action.type) {
//         case actions.ACTION_SIGNIN:
//             console.log('SIGNIN', action);
//             return {
//                 ...state,
//                 userContext: {
//                     username: action.payload.username,
//                     password: action.payload.password
//                 }
//
//             };
//         default:
//             return state;
//     }
    // if (action.type === 'signin')
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.playload.description,
    //             resolved: false
    //         }];
    // else if (action.type === 'signin')
    //     return state.filter(sign => sign.id !== action.payload.id)
    // return state;

// }