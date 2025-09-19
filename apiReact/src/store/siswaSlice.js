import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSiswa = createAsyncThunk("siswa/fetchSiswa", async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/siswa");
    return res.data.data;
});

export const createSiswa = createAsyncThunk(
    "siswa/createSiswa",
    async (newSiswa) => {
        const res = await axios.post("http://127.0.0.1:8000/api/siswa", newSiswa, {
        headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data.data;
    }
);

const siswaSlice = createSlice({
    name: "siswa",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSiswa.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchSiswa.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchSiswa.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(createSiswa.pending, (state) => {
            state.loading = true;
        })
        .addCase(createSiswa.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
        })
        .addCase(createSiswa.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default siswaSlice.reducer;