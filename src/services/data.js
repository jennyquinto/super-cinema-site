import axios from "axios";

const URL = 'http://localhost:3000';

export const getFilms = async () => {
    const url = `${URL}/results`
    try {
        const { data } = await axios.get(url);
        return data;

    } catch (error) {
        console.log(error);
        return []
    }
};

