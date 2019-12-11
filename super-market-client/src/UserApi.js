import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})
// /users/login
export const UserLogin = payload => api.post(`/users/login`, payload)

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const Apis = {
    // insertMovie,
    // getAllMovies,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
    UserLogin
}

export default Apis;     