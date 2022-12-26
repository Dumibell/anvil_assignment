import { ItemCard } from "./ItemCard";
import * as S from "../Components/Styled";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Main = ({ data, dropDown, setDropDown }) => {
  // const [filteredData, setFilteredData] = useState();
  const [clickedRegion, setClickedRegion] = useState("전체");

  return (
    // <div>dd</div>
    <>
      <S.MainContainer>
        <S.MainTitle>매장 안내</S.MainTitle>
        <S.MobileFilterContainer>
          <S.MobileFilterButton onClick={() => setDropDown(true)}>
            필터
            <FontAwesomeIcon icon={faFilter} className="filterIcon" />
          </S.MobileFilterButton>
        </S.MobileFilterContainer>
        <S.FilterContainer>
          <S.FilterBar>
            {FILTER_LIST.map((list) => {
              return (
                <S.FilterList
                  key={list.id}
                  onClick={() => {
                    setClickedRegion(list.region);
                  }}
                  primary={clickedRegion === list.region}
                >
                  {list.region}
                </S.FilterList>
              );
            })}
          </S.FilterBar>
        </S.FilterContainer>
        <S.ItemCardContainer>
          {data.map((item) => {
            if (
              clickedRegion.includes(item.region) ||
              clickedRegion === "전체"
            ) {
              return <ItemCard key={item.id} item={item} />;
            }
          })}
        </S.ItemCardContainer>
      </S.MainContainer>
      {dropDown ? (
        <S.MobileFilterBox onBlur={() => setDropDown(false)}>
          <div>
            <span className="filter">필터</span>
            <FontAwesomeIcon
              icon={faXmark}
              className="xIcon"
              onClick={() => setDropDown(false)}
            />
          </div>

          {FILTER_LIST.map((list) => {
            return (
              <S.FilterList
                key={list.id}
                onClick={() => {
                  setClickedRegion(list.region);
                  setDropDown(false);
                }}
                primary={clickedRegion === list.region}
              >
                {list.region}
              </S.FilterList>
            );
          })}
        </S.MobileFilterBox>
      ) : (
        <></>
      )}
    </>
  );
};

const FILTER_LIST = [
  { id: 1, region: "전체" },
  { id: 2, region: "서울" },
  { id: 3, region: "경기" },
  { id: 4, region: "대전/충청" },
  { id: 5, region: "전라" },
  { id: 6, region: "경상" },
];
