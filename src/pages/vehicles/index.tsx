import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";
import { useTheme } from "theme";
import * as Types from "types";

export const Vehicles: FC = () => {
  const {
    spacing: { md },
  } = useTheme();

  const vehicles = useSelector(Store.selectVehicles);
  const loading = useSelector(Store.selectVehiclesLoading);
  const error = useSelector(Store.selectVehiclesError);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState<number>(1);

  const listData = [...vehicles].sort((a, b) =>
    String(a.name)?.localeCompare(String(b.name))
  );

  useEffect(() => {
    dispatch(Store.fetchVehicles(pageNumber));
  }, [dispatch, pageNumber]);

  if (loading.fetchVehicles) return <Pages.Loading />;

  if (error.fetchVehicles) return <Pages.NotFound />;

  return (
    <Components.ListWrapper>
      {listData.map((vehicle) => (
        <Components.ListItem
          key={vehicle.id}
          onClick={() => navigate(`${Types.PATH.VEHICLES}/${vehicle.id}`)}
        >
          <Components.Avatar src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
          {vehicle.name}
        </Components.ListItem>
      ))}
      <Pagination
        current={pageNumber}
        total={39}
        pageSize={10}
        onChange={(page) => setPageNumber(page)}
        showSizeChanger={false}
        style={{ paddingTop: md, paddingBottom: md }}
      />
    </Components.ListWrapper>
  );
};
