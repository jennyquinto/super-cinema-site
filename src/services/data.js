import axios from "axios";

const URL = 'http://localhost:3000';
const Films_URL = 'https://api.themoviedb.org/3/discover/movie';

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
export const dataFilms = async () => {
    const query = `${Films_URL}?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-12-31`
    try {
        const  {data} = await axios.get(query);
        return  data.results;

    } catch (error) {
        console.log(error);
        return []
    }
};





