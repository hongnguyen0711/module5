import axios from "axios";

const apiURL = "http://localhost:8080/customer";

export const getAll = async () => {
    try {
        const res = await axios.get(apiURL);
        return res.data;
    } catch (e) {
        alert("Data not find");
    }
}
export const create = async (data) => {
    try {
        const res = await axios.post(apiURL, data);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(apiURL + `/${id}`);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const edit = async (data) => {
    try {
        const res = await axios.put(apiURL + `/${data.id}`, data);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}
export const del = async (data) => {
    console.log(apiURL + `/${data.id}`)
    try {
        return await axios.delete(apiURL + `/${data.id}`, data);
    } catch (e) {
        alert("Data not find");
    }
}