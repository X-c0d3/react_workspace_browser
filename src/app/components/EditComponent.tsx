import * as React from 'react';
import { connect } from 'react-redux';

class EditComponent extends React.Component {

    handleSubmit = (e: any) => {
        e.preventDefault();
        const newname = this.getName.value;
        const newmessage = this.getMessage.value;
        // Object
        const data = {
            newname,
            newmessage
        }

        this.props.dispatch({
            type: 'UPDATE_DATA',
            id: this.props.comment.id,
            data: data
        });

    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" placeholder="Enter Name" ref={(input) => this.getName = input} defaultValue={this.props.component.name} /> <br /> <br />
                <textarea required rows="5" cols="28" placeholder="Text" ref={(input) => this.getMessage = input} defaultValue={this.props.component.message} /><br /> <br />
                <button>Update</button>
            </form>
        </div>
        );
    }
}

// Connect
export default connect()(EditComponent);