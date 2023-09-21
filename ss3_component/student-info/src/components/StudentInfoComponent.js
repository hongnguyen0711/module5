import {Component} from "react";
import TableRow from "./TableRow";
class StudentInfoComponent extends Component{
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    id: 1,
                    name: "Lê Hai",
                    age: "19",
                    address: "Chế Lan Viên"
                },
                {
                    id: 2,
                    name: "Lê Hai",
                    age: "18",
                    address: "Chế Lan Viên"
                }

            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Danh sách sinh viên</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((student, i) => <TableRow key= {i} data= {student}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentInfoComponent;

