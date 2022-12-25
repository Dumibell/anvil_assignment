import { ItemCard } from "./ItemCard";
import * as S from "../Components/Styled";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export const Main = ({ data }) => {
  // const [filteredData, setFilteredData] = useState();
  const [clickedRegion, setClickedRegion] = useState("전체");

  return (
    // <div>dd</div>
    <>
      <S.MainContainer>
        <S.MainTitle>매장 안내</S.MainTitle>
        <S.MobileFilterContainer>
          <S.MobileFilterButton>
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
              return (
                <S.ItemCard key={item.id}>
                  <Image
                    src={item.storeImage}
                    alt="매장 이미지"
                    width={309}
                    height={235.96}
                  />

                  <S.StoreName>{item.storeName}</S.StoreName>
                  <S.StoreAddressContainer>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="locationIcon"
                    />
                    <S.StoreAddress>
                      <span className="address">
                        {item.mainAddress} {item.detailAdderss}
                      </span>
                    </S.StoreAddress>
                  </S.StoreAddressContainer>
                  <S.StoreContact>
                    <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
                    {item.contact}
                  </S.StoreContact>
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
