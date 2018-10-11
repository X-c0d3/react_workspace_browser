import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CommentForm from './components/CommentForm';
import ShowComment from './components/showcomment';

import { createStore } from 'redux';
import commentReducer from './components/commentRecucer';


const store = createStore(commentReducer); //create store

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Workspace Browser - POC</h1>
            <CommentForm />
            <ShowComment />
        </div>
    </Provider>,
    document.getElementById('root')
);