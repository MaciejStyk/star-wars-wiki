import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";
import { useTheme } from "theme";
import * as Types from "types";

export const Planets: FC = () => {
  const {
    spacing: { md },
  } = useTheme();

  const planets = useSelector(Store.selectPlanets);
  const loading = useSelector(Store.selectPlanetsLoading);
  const error = useSelector(Store.selectPlanetsError);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState<number>(1);

  const listData = [...planets].sort((a, b) =>
    String(a.name)?.localeCompare(String(b.name))
  );

  useEffect(() => {
    dispatch(Store.fetchPlanets(pageNumber));
  }, [dispatch, pageNumber]);

  if (loading.fetchPlanets) return <Pages.Loading />;

  if (error.fetchPlanets) return <Pages.NotFound />;

  return (
    <Components.Wrapper>
      {listData.map((planet) => (
        <Components.ListItem
          key={planet.id}
          onClick={() => navigate(`${Types.PATH.PLANETS}/${planet.id}`)}
        >
          <Components.Avatar src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
          {planet.name}
        </Components.ListItem>
      ))}
      <Pagination
        current={pageNumber}
        total={60}
        pageSize={10}
        onChange={(page) => setPageNumber(page)}
        showSizeChanger={false}
        style={{ paddingTop: md, paddingBottom: md }}
      />
    </Components.Wrapper>
  );
};
