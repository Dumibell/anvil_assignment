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
  display: flex;
  justify-content: center;
`;

export const FilterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const FilterBar = styled.div`
  height: 52px;
  margin-top: 52px;
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
`;

export const ItemCardContainer = styled.div`
  width: 1002px;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemCard = styled.div`
  width: 309px;
  height: 500px;
`;

export const StoreName = styled.div`
  font-size: 18px;
  margin-top: 12px;
`;

export const StoreAddress = styled.div`
  font-size: 16px;
  margin-top: 12px;
`;

export const StoreContact = styled.div`
  width: 309px;
  height: 38px;
  margin-top: 12px;
  border: 1px solid #174882;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #174882;
  font-size: 16px;
`;
