import axios from 'axios'
import Cookies from "js-cookie"
import { toast, Bounce } from 'react-toastify'

export const API_BASEURL = "http://localhost:5000/backend/v1"

export const setCookie = (cookie_name, cookie_value) => {
    Cookies.set(cookie_name, cookie_value, {
         expires: 7,
         htttpOnly: false,
         secure: false 
    });
}

export const removeCookie = (cookie_name) => {
    return Cookies.remove(cookie_name);
}

export const getCookie = (cookie_name) => {
    return Cookies.get(cookie_name);
}

export const makePostRequest = async (url, data = null, bearerToken = null) => {
    try {
        const config = { //creates an object that hold the authorization token
            headers: {}
        }
        //checks if the api passes a bearer token and then includes the authorization
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken}`
        }

        const response = await axios.post(API_BASEURL + url, data, config)
        return {
            data:response.data,
            status: response.status
        }
    }   catch (error) {
        let errorMsg = null
        if(error.response) {
            errorMsg = error.response.data.message;
        }
        return {
            data: null,
            status: error.response? error.response.status : error.request? 400 : 500,
            errorMsg: errorMsg ?? "unknown error occured, please check connection"
        }
    }
}

export const makeGetRequest = async (url, bearerToken = null) => {
    try {
        const config = {
            headers: {}
        }
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken}`
        }
        const response = await axios.get(API_BASEURL + url, config)
        return {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        let errorMsg = null;
        if (error.response) {
          errorMsg = error.response.data.msg;
        }
        return {
          error: errorMsg ?? "Unknown error occurred, please check connection",
          status: error.response ? error.response.status : 500,
        };  
    }
}

export const makePutRequest = async (url, data = null , bearerToken = null) => {
    try {
        const config = { //creates an object that hold the authorization token
            headers: {}
        }
        //checks if the api passes a bearer token and then includes the authorization
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken}`
        }

        const response = await axios.put(API_BASEURL + url, data, config)
        return {
            data:response.data,
            status: response.status
        }
    }   catch (error) {
        let errorMsg = null
        if(error.response) {
            errorMsg = error.response.data.message;
        }
        return {
            data: null,
            status: error.response? error.response.status : error.request? 400 : 500,
            errorMsg: errorMsg ?? "unknown error occured, please check connection"
        }
    }
}

export const makeDeleteRequest = async (url, data = null, bearerToken = null) => {
    try {
        const config = {
            headers: {},
            data: data
        }
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken}`
        }
        const response = await axios.delete(API_BASEURL + url, config)
        return {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        let errorMsg = null
        if(error.response) {
            errorMsg = error.response.data.message;
        }
        return {
            data: null,
            status: error.response? error.response.status : error.request? 400 : 500,
            errorMsg: errorMsg?? "unknown error occured, please check connection"
        }
    }
}
    

export const successMsg = (msg) => {
    return toast.success(msg, {
        position: "top-center",
        transition: Bounce,
        autoClose: 3000,
        theme: "colored",
        draggable: false,
    })
}

export const errorMsg = (msg) => {
    return toast.error(msg, {
        position: "bottom-center",
        transition: Bounce,
        autoClose: 3000,
        theme: "colored",
        draggable: false,
    })
}