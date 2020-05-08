import { tablesApi } from "../../../api/tablesApi";

const SET_CANCELED_FIRST =
    "b2b/canceled-reducer/SET_CANCELED_FIRST";

let initialState = {
    request: [],
};

export const ReducerCanceled = (state = initialState, action) => {
    switch (action.type) {
        case SET_CANCELED_FIRST: {
            return { ...state, request: action.data };
        }
        default:
            return state;
    }
};

export const setCanceledFirst = data => ({ type: SET_CANCELED_FIRST, data });

export const requestCanceledFirst = () => {
    return async (dispatch, getState) => {
        let data = await tablesApi.getCanceled();
        dispatch(setCanceledFirst(data.data.items));
    };
};

