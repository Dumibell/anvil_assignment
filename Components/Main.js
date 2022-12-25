import { ItemCard } from "./ItemCard";
import * as S from "../Components/Styled";
import Image from "next/image";
import { useState } from "react";

export const Main = ({ data }) => {
  // const [filteredData, setFilteredData] = useState();
  const [clickedRegion, setClickedRegion] = useState("전체");

  return (
    // <div>dd</div>
    <>
      <S.MainContainer>
        <S.MainTitle>매장 안내</S.MainTitle>
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
              return (
                <S.ItemCard key={item.id}>
                  <Image
                    src={item.storeImage}
                    alt="매장 이미지"
                    width={309}
                    height={235.96}
                  />
                  {/* <img src={item.storeImage} alt="매장 이미지" /> */}
                  <S.StoreName>{item.storeName}</S.StoreName>
                  <S.StoreAddress>
                    {item.mainAddress}
                    {item.detailAdderss}
                  </S.StoreAddress>
                  <S.StoreContact>{item.contact}</S.StoreContact>
                </S.ItemCard>
              );
            }
          })}
        </S.ItemCardContainer>
        <div>카드</div>
      </S.MainContainer>
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
