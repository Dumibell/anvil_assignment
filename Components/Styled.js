import styled from "styled-components";

//Body
// export const Body = styled.div`
//   @media screen and (max-width: 768px) {
//     background-color: ${(props) => (props.primary ? "black" : "white")};
//     opacity: ${(props) => (props.primary ? 0.5 : 1)};
//   }
// `;

//Nav
export const NavBar = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.div`
  display: flex;
  justify-content: center;
  top: 12px;
  left: 280px;
  width: 96px;
  height: 36px;
  font-weight: bold;
  color: ${(props) => (props.primary ? "#174882" : "black")};
  border-bottom: ${(props) => (props.primary ? "2px solid #174882" : "")};

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.div`
  width: 124.44px;
  height: 28px;
  background-color: #174882;
  margin-left: 38px;
`;

//Main
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

export const MobileFilterBox = styled.div`
  position: absolute;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 308px;
  background-color: white;
  border-radius: 10px 10px 0px 0px;

  .filter {
    width: 100vw;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .xIcon {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 768px) {
    display: none;
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

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 44px;
    background-color: ${(props) => (props.primary ? "#EDEDEE" : "white")};
    color: ${(props) => (props.primary ? "black" : "#B1B1B1")};
    font-size: 16px;
    &:hover {
      background-color: #ededee;
      color: black;
    }
  }
`;

export const ItemCardContainer = styled.div`
  width: 1041px;
  margin-top: 32px;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemCard = styled.div`
  width: 309px;
  height: 450px;
  padding: 0 19px 0 19px;

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
