import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCookie,
    API_BASEURL,
    makeGetRequest
} from '../hooks'

export const fetchUserData = createAsyncThunk('userData/fetchUserData', async () => {
    const response = await makeGetRequest(
        API_BASEURL + '/user',
        getCookie("access_token")
    )
    return response
})
