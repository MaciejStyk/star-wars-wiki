import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";

export const Character: FC = () => {
  const { characterId } = useParams();

  const dispatch = useDispatch<Store.DispatchType>();
  const character = useSelector(Store.selectCharacterById(characterId));
  const loading = useSelector(Store.selectCharactersLoading);
  const error = useSelector(Store.selectCharactersError);

  useEffect(() => {
    if (characterId) dispatch(Store.fetchCharacter(characterId));
  }, [dispatch, characterId]);

  if (loading.fetchCharacter) return <Pages.Loading />;

  if (error.fetchCharacter) return <Pages.NotFound />;

  return (
    <>
      <Components.Portrait src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
      <Components.Text text={character?.name} type="h1semiBold" />
    </>
  );
};
