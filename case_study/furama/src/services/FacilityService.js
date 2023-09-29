import axios from "axios";

const apiURl = "http://localhost:8080/services";
export const getALl = async () => {
    try {
        const res = await axios.get(apiURl);
        return res.data;
    } catch (e) {
        alert("Data not find!");
    }
}
export const create = async (data) => {
    try {
        const res = await axios.post(apiURl, data);
        return res;
    } catch (e) {
        alert("Data not find!");
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(apiURl + `/${id}`);
        return res;
    } catch (e) {
        alert("Data not find!");
    }
}
export const edit = async (data) => {
    try {
        const res = await axios.put(apiURl + `/${data.id}`, data);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const del = async (data) => {
    try {
        const res = await axios.delete(apiURl + `/${data.id}`, data);
        return res;
    }catch (e) {
        alert("Data not find");
    }
}