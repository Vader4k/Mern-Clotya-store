import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCookie,
    makeGetRequest
} from '../hooks'


export const fetchUserData = createAsyncThunk('userData/fetchUserData', async () => {
    const res = await makeGetRequest('/user', getCookie("auth_token"))
    return res
})
