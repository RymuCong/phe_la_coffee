import axios from "axios";

export const handleGetData = async () => {
    const res = await axios.get("https://671761aeb910c6a6e027d0ee.mockapi.io/drinks");
    return res.data;
};