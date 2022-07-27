import *  as axios from 'axios';



const instanse = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY':'c9bc458a-5eef-44c7-a0ce-f2d4ee6dbad6'}

});

export const userAPI = {
getUsers  (currentPage= 1, pageSize= 10)  {
return instanse.get(  `users?page=${currentPage}&count=${pageSize}`)
.then(response => {return response.data;})
},

Follow ( userId) {
return instanse.post(`follow/${userId}`,{} )
.then(response => {return response.data;})
},

unFollow (userId) {
    return instanse.delete(`follow/${userId}`)
    .then(response => {return response.data;})
},


}

export const profileAPI = {
    profile (userId) {
        return instanse.get(`profile/`+ userId)
        .then(response => {return response.data;})
    },
    status (userId) {
        return instanse.get(`profile/status/`+ userId)
        .then(response => {return response.data;})
    },
    updateStatus (status) {
        return instanse.put(`profile/status/`, {status})
        
    },
    uploadImage (image) {
        return instanse.put(`profile/photo/`,{image})
        .then(response => {return response.data;})
    }

}

export const authAPI = {
    authMe() {
        return instanse.get(`auth/me`)
        .then(response => {return response.data;})
    },

    login(email, password,rememberMe=false) {
        return instanse.post(`auth/login`, {email, password,rememberMe})
        
    },
    logout() {
        return instanse.delete(`auth/login`)
        .then(response => {return response.data;})
    },
    
}




