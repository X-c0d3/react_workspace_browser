import * as React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component {

    handleSubmit = (e: any) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        // Object
        const data = {
            id: new Date(),
            name,
            message
        }

        this.props.dispatch({
            type: 'ADD_DATA',
            data
        });

        this.getName.value = '';
        this.getMessage.value = '';
        console.log(data);
    }
    render() {
        return (<div>
            <h1>Add Comment</h1>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" placeholder="Enter Name" ref={(input) => this.getName = input} /> <br /> <br />
                <textarea required rows="5" cols="28" placeholder="Text" ref={(input) => this.getMessage = input} /><br /> <br />
                <button>Comment</button>
            </form>
        </div>
        );
    }
}

//Connect
export default connect()(CommentForm);