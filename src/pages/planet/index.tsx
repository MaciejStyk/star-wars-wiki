import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as Pages from "pages";
import * as Store from "store";

export const Planet: FC = () => {
  const { planetId } = useParams();

  const dispatch = useDispatch<Store.DispatchType>();
  const planet = useSelector(Store.selectPlanetById(planetId));
  const loading = useSelector(Store.selectPlanetsLoading);
  const error = useSelector(Store.selectPlanetsError);

  useEffect(() => {
    if (planetId) dispatch(Store.fetchPlanet(planetId));
  }, [dispatch, planetId]);

  if (loading.fetchPlanet) return <Pages.Loading />;

  if (error.fetchPlanet) return <Pages.NotFound />;

  return <>{JSON.stringify(planet)}</>;
};
