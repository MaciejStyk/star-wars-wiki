import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "const";
import * as Types from "types";

export const fetchVehicles = createAsyncThunk(
  "[Vehicles] Fetch vehicles",
  async (pageNumber: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.VEHICLES}?page=${pageNumber}`
      );
      return response.data;
    } catch (error) {
      toast.error(`Failed to fetch vehicles. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch vehicles.");
    }
  }
);

export const fetchVehicle = createAsyncThunk(
  "[Vehicles] Fetch vehicle",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.VEHICLES}/${id}/`
      );
      return response.data;
    } catch (error) {
      toast.error(`Failed to fetch vehicle. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch vehicle.");
    }
  }
);

export const fetchVehiclesById = createAsyncThunk(
  "[Vehicles] Fetch vehicles by id",
  async (vehicleIds: string[], thunkAPI) => {
    try {
      const fetchPromises = vehicleIds.map(async (vehicleId) => {
        const response = await axios.get(
          `${BASE_URL}${Types.ENDPOINTS.VEHICLES}/${vehicleId}/`
        );
        return response.data;
      });
      const data = await Promise.all(fetchPromises);
      return data;
    } catch (error) {
      toast.error(`Failed to fetch vehicles. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch vehicles.");
    }
  }
);
