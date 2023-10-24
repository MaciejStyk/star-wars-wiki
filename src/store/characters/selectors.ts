import { createSelector, Selector } from "reselect";

import * as Types from "types";

export const selectCharacters: Selector<Types.AppState, Types.ICharacter[]> = ({
  characters,
}) => characters.data;

export const selectCharacterById = (id?: string) =>
  createSelector(selectCharacters, (characters) =>
    characters.find((character) => character?.id === id)
  );

export const selectCharactersLoading: Selector<
  Types.AppState,
  Types.ICharactersLoading
> = ({ characters }) => characters.loading;

export const selectCharactersError: Selector<
  Types.AppState,
  Types.ICharactersError
> = ({ characters }) => characters.error;
