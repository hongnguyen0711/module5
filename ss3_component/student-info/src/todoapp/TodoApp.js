import React, {Component} from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["qnha"],
            item: ""
        }
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item !== "") {
            this.setState(pre=> ({list: [...pre.list,this.state.item], item:""})
            )
        }
    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input type="text"
                       value={this.state.item}
                       onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((e, i) =>
                        <li key={i}>{e}</li>
                    )}
                </ul>
            </>

        );
    }
}

export default TodoApp;