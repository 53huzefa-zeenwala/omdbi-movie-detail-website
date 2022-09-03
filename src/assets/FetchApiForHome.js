import axios from "axios";

const API_KEY = '9fa0739c3dac944bf57a48c7dcc42507'

const BaseUrl ='https://api.themoviedb.org/3'

export const FetchTrandingMoviesOfDay = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/trending/movie/day`,{
            params:{
                api_key:API_KEY
            }
        })
        return data.results
    } catch (error) {}
}

export const FetchTrandingMoviesOfWeek = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/trending/movie/week`,{
            params:{
                api_key:API_KEY
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchTrandingTvshowsOfDay = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/trending/tv/day`,{
            params:{
                api_key:API_KEY
            }
        })
        return data.results
    } catch (error) {}
}

export const FetchTrandingTvshowsOfWeek = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/trending/tv/week`,{
            params:{
                api_key:API_KEY
            }
        })
        return data.results
    } catch (error) {}
}