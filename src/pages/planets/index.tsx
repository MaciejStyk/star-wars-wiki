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
  const count = useSelector(Store.selectPlanetsCount);
  const loading = useSelector(Store.selectPlanetsLoading);
  const error = useSelector(Store.selectPlanetsError);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState<number>(1);

  const planetsSorted = [...planets].sort((a, b) =>
    String(a.name)?.localeCompare(String(b.name))
  );

  useEffect(() => {
    dispatch(Store.fetchPlanets(pageNumber));
  }, [dispatch, pageNumber]);

  if (loading.fetchPlanets) return <Pages.Loading />;

  if (error.fetchPlanets) return <Pages.NotFound />;

  return (
    <Components.Wrapper>
      {planetsSorted.map((planet) => (
        <Components.ListItem
          key={planet.id}
          onClick={() => navigate(`${Types.PATH.PLANETS}/${planet.id}`)}
        >
          <Components.Avatar src={planet.image} />
          {planet.name}
        </Components.ListItem>
      ))}
      <Pagination
        current={pageNumber}
        total={count}
        pageSize={10}
        onChange={(page) => setPageNumber(page)}
        showSizeChanger={false}
        style={{ paddingTop: md, paddingBottom: md }}
      />
    </Components.Wrapper>
  );
};
