import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCookie,
    API_BASEURL
} from '../hooks'
import axios from "axios";

export const fetchUserData = createAsyncThunk('userData/fetchUserData', async () => {
    const response = await axios.get(
        API_BASEURL + '/user',
        {
            headers: {
                'Authorization': `Bearer ${getCookie("auth_token")}`,
                'Content-Type': 'application/json'
            }
        }
    )
    
    return response
})
