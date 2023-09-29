import axios from "axios";

const apiURlContract = "http://localhost:8080/contracts";

export const getAllPage = async (page, limit, nameSearch) => {
    try {
        const result = await axios.get(apiURlContract + `?_page=${page}&_limit=${limit}&contractNumber_like=${nameSearch}`);
        const records = result.headers.get("x-total-count");
        const data = result.data;
        return [data, records, result];
    } catch (e) {
        alert("Data not found!");
    }
}

export const create = async (data) => {
    try {
        const result = await axios.post(apiURlContract, data);
        return result;
    } catch (e) {
        alert("Data not found!");
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(apiURlContract + `/${id}`);
        return result;
    } catch (e) {
        alert("Data not found!");
    }
}

export const edit = async (data) => {
    try {
        const result = await axios.put(apiURlContract + `/${data.id}`, data);
        console.log("api"+result.status)
        return result;
    } catch (e) {
        alert("Data not found!");
    }
}

export const del = async (data) => {
    try {
        const result = await axios.delete(apiURlContract + `/${data.id}`, data);
        return result;
    }catch (e) {
        alert("Data not found!");
    }
}