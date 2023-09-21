import React, { Component } from "react";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
                <td>{this.props.data.address}</td>
            </tr>
        );
    }
}

export default TableRow;