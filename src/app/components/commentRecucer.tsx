import * as React from 'react';
import { stat } from 'fs';
const commentReducer = (state = [], action) => {
    // Actions
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default commentReducer;