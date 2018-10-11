import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CommentForm from './components/CommentForm';
import ShowComment from './components/showcomment';
import { createStore } from 'redux'


ReactDOM.render(
    <div>
        <h1>Workspace Browser - POC</h1>
        <CommentForm/>
        <ShowComment/>
    </div>,
    document.getElementById('root')
);