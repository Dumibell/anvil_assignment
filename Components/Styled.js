import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 60px;
  justify-content: space-between;
`;

export const NavList = styled.div`
  display: flex;
  top: 12px;
  left: 280px;
  width: 96px;
  height: 36px;
`;

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.div`
  width: 100vw;
  height: 35px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 52px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 29px;
  }
`;

export const MobileFilterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileFilterButton = styled.div`
  width: 330px;
  display: flex;
  justify-content: end;

  .filterIcon {
    margin-left: 8px;
  }
`;

export const FilterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FilterBar = styled.div`
  height: 52px;
  border: 1px solid #ededee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 52px;
  background-color: ${(props) => (props.primary ? "#174882" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};

  &:hover {
    cursor: pointer;
  }
`;

export const ItemCardContainer = styled.div`
  width: 1002px;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemCard = styled.div`
  width: 309px;
  height: 450px;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const StoreName = styled.div`
  font-size: 18px;
  margin-top: 12px;
  font-weight: medium;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StoreAddressContainer = styled.div`
  display: flex;
  height: 48px;
  font-size: 16px;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: 20px;
  }
`;

export const StoreAddress = styled.div`
  margin-left: 12px;
`;

export const StoreContact = styled.div`
  width: 309px;
  height: 38px;
  margin-top: 20px;

  border: 1px solid #174882;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #174882;
  font-size: 16px;

  .phoneIcon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;

    .phoneIcon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
`;
