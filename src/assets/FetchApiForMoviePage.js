import axios from "axios";

const API_KEY = '9fa0739c3dac944bf57a48c7dcc42507'

const BaseUrl ='https://api.themoviedb.org/3'

export const FetchDiscoverMoviesPageOne = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/discover/movie`,{
            params:{
                api_key:API_KEY,
                sort_by:"popularity.desc",
                page:1,
                with_watch_monetization_types:"flatrate",
                region:'IN'
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchDiscoverMoviesPageTwo = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/discover/movie`,{
            params:{
                api_key:API_KEY,
                sort_by:"popularity.desc",
                page:2,
                with_watch_monetization_types:"flatrate",
                region:'IN'
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchDiscoverMoviesPageThree = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/discover/movie`,{
            params:{
                api_key:API_KEY,
                sort_by:"popularity.desc",
                page:3,
                with_watch_monetization_types:"flatrate",
                region:'IN'
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchDiscoverMoviesPageFour = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/discover/movie`,{
            params:{
                api_key:API_KEY,
                sort_by:"popularity.desc",
                page:4,
                with_watch_monetization_types:"flatrate",
                region:'IN'
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchDiscoverMoviesPageFive = async () => {
    try {
        const {data} = await axios.get(`${BaseUrl}/discover/movie`,{
            params:{
                api_key:API_KEY,
                sort_by:"popularity.desc",
                page:5,
                with_watch_monetization_types:"flatrate",
                region:'IN'
            }
        })
        return data.results
    } catch (error) {}
}
export const FetchApiForMovieSearch = async (searchQuery) => {
    try {
        const {data} = await axios.get(`${BaseUrl}/search/movie`,{
            params:{
                api_key:API_KEY,
                query:searchQuery
            }
        })
        return data.results
    } catch (error) {}
}