import axios from "axios";

const API_KEY = '9fa0739c3dac944bf57a48c7dcc42507'

const BaseUrl ='https://api.themoviedb.org/3'

export const FetchApiMoviePage = async (id) => {
    try {
        const {data} = await axios.get(`${BaseUrl}/movie/${id}`,{
            params:{
                api_key:API_KEY,
                append_to_response:"videos"
            }
        })
        console.log(data)
        return data
    } catch (error) {}
}
export const FetchApiTvshowPage = async (id) => {
    try {
        const {data} = await axios.get(`${BaseUrl}/tv/${id}`,{
            params:{
                api_key:API_KEY,
                append_to_response:"videos"
            }
        })
        console.log(data)
        return data
    } catch (error) {}
}