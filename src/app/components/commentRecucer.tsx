import * as React from 'react';
import { stat } from 'fs';
import comment from './comment';
const commentReducer = (state = [], action) => {
    // Actions
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.concat([action.data]);
            break;
        case 'DELETE_COMMENT':
            return state.filter((comment) => comment.id !== action.id);
            break;
        case 'EDIT_COMMENT':
            return state.filter((comment) => comment.id === action.id ? { ...comment, editing: !comment.editing } : comment);
            break;
        case 'UPDATE_COMMENT':
            return state.map((comment) => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        name: action.data.newname,
                        message: action.data.newmessage,
                        editing: !comment.editing

                    }
                } else
                    return comment;
            });
            break;
        default:
            return state;
    }
}

export default commentReducer;