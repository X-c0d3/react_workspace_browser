import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserComponent from './components/UserComponent';
ReactDOM.render(
    <div>
        <h1>Workspace Browser - POC</h1>
        <UserComponent name='Watchara' age={105} address='get me if you can' telephone='0840810033' />
    </div>,
    document.getElementById('root')
);