import { createReducer } from "@reduxjs/toolkit";

import { CHARACTERS_IMAGES, CHARACTER_AVATAR } from "const";
import * as Types from "types";
import * as Utils from "utils";

import {
  fetchCharacters,
  fetchCharacter,
  fetchCharactersById,
} from "./actions";

const initialState: Types.ICharactersReducer = {
  data: [],
  loading: {},
  error: {},
};

export const charactersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCharacters.pending, (state, action) => {
      state.error.fetchCharacters = undefined;
      state.loading.fetchCharacters = true;
    })
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.error.fetchCharacters = undefined;
      state.loading.fetchCharacters = false;
      state.count = action.payload.count;
      state.data = action.payload.results.map((character: Types.ICharacter) => {
        const characterId = Utils.extractIdFrom(character.url);
        return {
          ...character,
          id: characterId,
          image: CHARACTERS_IMAGES[Number(characterId) - 1] || CHARACTER_AVATAR,
        };
      });
    })
    .addCase(fetchCharacters.rejected, (state, action) => {
      state.error.fetchCharacters = action.payload;
      state.loading.fetchCharacters = false;
    })
    .addCase(fetchCharacter.pending, (state, action) => {
      state.error.fetchCharacter = undefined;
      state.loading.fetchCharacter = true;
    })
    .addCase(fetchCharacter.fulfilled, (state, action) => {
      const characterId = Utils.extractIdFrom(action.payload.url);
      const fetchedCharacter = {
        ...action.payload,
        id: characterId,
        image: CHARACTERS_IMAGES[Number(characterId) - 1] || CHARACTER_AVATAR,
      };
      state.error.fetchCharacter = undefined;
      state.loading.fetchCharacter = false;
      state.data =
        state.data.length !== 0
          ? state.data.map((character) =>
              character?.id === fetchedCharacter?.id
                ? fetchedCharacter
                : character
            )
          : [fetchedCharacter];
    })
    .addCase(fetchCharacter.rejected, (state, action) => {
      state.error.fetchCharacter = action.payload;
      state.loading.fetchCharacter = false;
    })
    .addCase(fetchCharactersById.pending, (state, action) => {
      state.error.fetchCharacters = undefined;
      state.loading.fetchCharacters = true;
    })
    .addCase(fetchCharactersById.fulfilled, (state, action) => {
      const fetchedCharacters = action.payload.map((character) => ({
        ...character,
        id: Utils.extractIdFrom(character.url),
      }));
      state.error.fetchCharacters = undefined;
      state.loading.fetchCharacters = false;
      state.data = fetchedCharacters;
    })
    .addCase(fetchCharactersById.rejected, (state, action) => {
      state.error.fetchCharacters = action.payload;
      state.loading.fetchCharacters = false;
    });
});
