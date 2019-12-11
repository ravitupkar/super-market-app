import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})
// /users/login
export const UserRegister = payload => {
    return  api.post(`/users/register`, payload);
} 
// /users/login
export const UserLogin = payload => {
    return api.post(`/users/login`, payload);
}
// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)
    export const setUserInfo = payload => {
        return localStorage.setItem("userInfo", JSON.stringify(payload));
    }

    export const getUserInfo = () => {
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    export const  getAuthHeader = () =>  {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    export const logOut = () => {
        localStorage.removeItem("userInfo");
        return axios.post('/logout', {}, this.getAuthHeader());
    }

const Apis = {
    // insertMovie,
    // getAllMovies,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
    UserLogin,
    UserRegister,
    getUserInfo,
    getAuthHeader,
    logOut
}

export default Apis;     