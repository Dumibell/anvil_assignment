import Image from "next/image";
import * as S from "../Components/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const ItemCard = ({ item }) => {
  return (
    <S.ItemCard>
      <Image
        src={item.storeImage}
        alt="매장 이미지"
        width={309}
        height={235.96}
      />
      <S.StoreName>{item.storeName}</S.StoreName>
      <S.StoreAddressContainer>
        <FontAwesomeIcon icon={faLocationDot} className="locationIcon" />
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
};
