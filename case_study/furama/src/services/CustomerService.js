import axios from "axios";

const apiURL = "http://localhost:8080/customer";
const apiURLType = "http://localhost:8080/customerType";

export const getAllByName = async (data) => {
    try {
        const res = await axios.get(apiURL + "?name_like=" + data);
        return res.data;
    } catch (e) {
        alert("Data not find");
    }
}

export const getAll = async () => {
    try {
        const res = await axios.get(apiURL);
        return res.data;
    } catch (e) {
        alert("Data not find");
    }
}
export const getCustomerType = async () => {
    try {
        const res = await axios.get(apiURLType);
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
        return await axios.delete(apiURL + `/${data.id}`);
    } catch (e) {
        alert("Data not find");
    }
}
export const getAllPage = async (page, limit, nameSearch, emailSearch) => {
    try {
        const result = await axios.get(apiURL + `?_page=${page}&_limit=${limit}&name_like=${nameSearch}&email_like=${emailSearch}`);
        const records = result.headers.get("x-total-count");
        const data = result.data;
        return [data, records, result];
    } catch (e) {
        alert("Data not find");
    }
}