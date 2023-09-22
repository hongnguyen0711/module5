import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books");
        return res.data;
    } catch (e) {
        alert("Data not find");
    }
}

export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/books", data);
        return res;
    } catch (e) {
        alert("Data not find");
    }
}