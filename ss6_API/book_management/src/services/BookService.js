import axios from "axios";

const apiUrl = "http://localhost:8080/books";
export const getAll = async () => {
    try {
        const res = await axios.get(apiUrl);
        return res.data;
    } catch (e) {
        alert("Data not find");
    }
}

export const create = async (data) => {
    try {
        const res = await axios.post(apiUrl, data);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(apiUrl + `/${id}`);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const edit = async (data) =>{
    try {
        const res = await axios.put(apiUrl + `/${data.id}`, data);
        return res;
    }catch (e) {
        alert("Data not find");
    }
}
export const del = async (data) => {
    console.log(apiUrl + `/${data.id}`)
    try {
        return await axios.delete(apiUrl + `/${data.id}`, data);
    } catch (e) {
        alert("Data not find");
    }
}