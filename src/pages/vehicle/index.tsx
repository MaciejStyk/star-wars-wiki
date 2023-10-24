import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as Pages from "pages";
import * as Store from "store";

export const Vehicle: FC = () => {
  const { vehicleId } = useParams();

  const dispatch = useDispatch<Store.DispatchType>();
  const planet = useSelector(Store.selectVehicleById(vehicleId));
  const loading = useSelector(Store.selectVehiclesLoading);
  const error = useSelector(Store.selectVehiclesError);

  useEffect(() => {
    if (vehicleId) dispatch(Store.fetchPlanet(vehicleId));
  }, [dispatch, vehicleId]);

  if (loading.fetchVehicle) return <Pages.Loading />;

  if (error.fetchVehicle) return <Pages.NotFound />;

  return <>{JSON.stringify(planet)}</>;
};
