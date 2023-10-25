import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";
import { useTheme } from "theme";
import * as Types from "types";

export const Characters: FC = () => {
  const {
    spacing: { md },
  } = useTheme();

  const characters = useSelector(Store.selectCharacters);
  const count = useSelector(Store.selectCharactersCount);
  const loading = useSelector(Store.selectCharactersLoading);
  const error = useSelector(Store.selectCharactersError);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState<number>(1);

  const charactersSorted = [...characters].sort((a, b) =>
    String(a.name)?.localeCompare(String(b.name))
  );

  useEffect(() => {
    dispatch(Store.fetchCharacters(pageNumber));
  }, [dispatch, pageNumber]);

  if (loading.fetchCharacters) return <Pages.Loading />;

  if (error.fetchCharacters) return <Pages.NotFound />;

  return (
    <Components.Wrapper>
      {charactersSorted.map((character) => (
        <Components.ListItem
          key={character.id}
          onClick={() => navigate(`${Types.PATH.CHARACTERS}/${character.id}`)}
        >
          <Components.Avatar src={character.image} />
          {character.name}
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
