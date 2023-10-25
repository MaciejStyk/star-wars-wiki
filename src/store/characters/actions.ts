import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "const";
import * as Types from "types";

export const fetchCharacters = createAsyncThunk(
  "[Characters] Fetch characters",
  async (pageNumber: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.CHARACTERS}?page=${pageNumber}`
      );
      return response.data.results;
    } catch (error) {
      toast.error(`Failed to fetch characters. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch characters.");
    }
  }
);

export const fetchCharacter = createAsyncThunk(
  "[Characters] Fetch character",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${Types.ENDPOINTS.CHARACTERS}/${id}/`
      );
      return response.data;
    } catch (error) {
      toast.error(`Failed to fetch character. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch character.");
    }
  }
);

export const fetchCharactersById = createAsyncThunk(
  "[Characters] Fetch characters by id",
  async (characterIds: string[], thunkAPI) => {
    try {
      const fetchPromises = characterIds.map(async (characterId) => {
        const response = await axios.get(
          `${BASE_URL}${Types.ENDPOINTS.CHARACTERS}/${characterId}/`
        );
        return response.data;
      });
      const data = await Promise.all(fetchPromises);
      return data;
    } catch (error) {
      toast.error(`Failed to fetch characters. ${error}`);
      return thunkAPI.rejectWithValue("Failed to fetch characters.");
    }
  }
);
