import axios from "axios";
import {log} from "async";

export const getALl = async () => {
    try {
        const res = await axios.get("http://localhost:8080/toDoList");
        return res.data;
    }catch (e) {
        alert("không có dữ liệu")
    }
}
export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/toDoList",data);
        console.log(res.status)
        return res;
    }catch (e){
        alert("ERROR");
    }
}