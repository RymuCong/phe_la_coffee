import axios from "axios";

export const handleGetData = async () => {
    const res = await axios.get("https://671761aeb910c6a6e027d0ee.mockapi.io/drinks");
    return res.data;
};

export const handleGetDataHomePage = async () => {
    const res = await axios.get("https://671761aeb910c6a6e027d0ee.mockapi.io/news");
    return res.data;
};