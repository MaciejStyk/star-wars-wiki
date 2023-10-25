import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "const";
import * as Types from "types";

export const fetchPlanets = createAsyncThunk(
  "[Planets] Fetch planets",
  async (pageNumber: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.PLANETS}?page=${pageNumber}`
      );
      return response.data;
    } catch (error) {
      toast.error(`Failed to fetch planets. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch planets.");
    }
  }
);

export const fetchPlanet = createAsyncThunk(
  "[Planets] Fetch planet",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.PLANETS}/${id}/`
      );
      return response.data;
    } catch (error) {
      toast.error(`Failed to fetch planet. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch planet.");
    }
  }
);
